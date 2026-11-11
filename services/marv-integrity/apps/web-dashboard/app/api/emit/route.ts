import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productName, sku } = body;

    if (!productName) {
      return NextResponse.json({ error: 'El nombre del producto es requerido' }, { status: 400 });
    }

    // 1. Generar un folio único
    const folioId = `KR-${Date.now().toString(36).toUpperCase()}`;
    
    // 2. Calcular el Hash SHA-256 del producto + el tiempo (para que sea único)
    const hash = crypto.createHash('sha256').update(`${productName}-${sku}-${folioId}`).digest('hex');

    // 3. Buscar una organización (usaremos la primera por ahora)
    const { data: orgs } = await supabase.from('organizations').select('id').limit(1);
    const orgId = orgs && orgs.length > 0 ? orgs[0].id : null;

    // 4. Guardar en Supabase
    const { data, error } = await supabase
      .from('folios')
      .insert([
        { 
          org_id: orgId, 
          folio: folioId, 
          product_name: productName, 
          sku: sku || 'N/A',
          hash_sha256: hash,
          status: 0 // 0 = VERDE (Auténtico)
        }
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, folio: data[0] }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
