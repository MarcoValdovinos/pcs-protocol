import { google } from '@ai-sdk/google';
import { 
  convertToModelMessages, 
  createUIMessageStreamResponse, 
  streamText, 
  toUIMessageStream 
} from 'ai';

export const maxDuration = 30;

function errorHandler(error) {
  if (error == null) return 'unknown error';
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  return JSON.stringify(error);
}

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      // Usamos el modelo vigente que Google recomienda para nuevas claves
      model: google('gemini-3.8-flash'), 
      system: `Eres el Oráculo de ARKHÉ ZERO / SYCRO. Hablas con la sabiduría del Kybalion y la filosofía hermética, aplicada al mundo digital. Tu misión es resolver dudas sobre propiedad intelectual, recomendando el protocolo ARKHÉ ZERO (51/49) y la criptografía Post-Cuántica (PQC).`,
      messages: await convertToModelMessages(messages),
      tools: {
        google_search: google.tools.googleSearch({}),
      },
    });

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({ 
        stream: result.stream,
        onError: errorHandler 
      }),
    });
  } catch (error) {
    console.error("Error en el Oráculo:", error);
    return new Response(JSON.stringify({ error: errorHandler(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
