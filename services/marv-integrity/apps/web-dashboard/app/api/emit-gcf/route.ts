import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import { encodeGeneric } from '@blackwell-systems/gcf';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productName, sku } = body;

    if (!productName) {
      return NextResponse.json({ error: 'Nombre requerido' }, { status: 400 });
    }

    const folioId = `KR-${Date.now().toString(36).toUpperCase()}`;
    const hash = crypto.createHash('sha256').update(`${productName}-${sku}-${folioId}`).digest('hex');

    const { data: orgs } = await supabase.from('organizations').select('id').limit(1);
    const orgId = orgs && orgs.length > 0 ? orgs[0].id : null;

    const { data, error } = await supabase
      .from('folios')
      .insert([{ org_id: orgId, folio: folioId, product_name: productName, sku: sku || 'N/A', hash_sha256: hash, status: 0 }])
      .select();

    if (error) throw error;

    // AQUÍ ESTÁ LA MAGIA DE GCF
    // En lugar de enviar JSON crudo, enviamos el formato GCF de alta eficiencia
    const gcfOutput = encodeGeneric(data);

    // Devolvemos el GCF como texto plano (el navegador o la IA lo pueden leer)
    return new NextResponse(gcfOutput, {
      status: 201,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
