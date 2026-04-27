export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'La API Key de Google TTS no está configurada en Vercel.' });
  }

  const { text, lang, gender } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'El texto es obligatorio.' });
  }

  // Mapear idioma y género a voces Neural2 (Alta definición) de Google
  const map = {
    'es': { female: 'es-ES-Neural2-A', male: 'es-ES-Neural2-B', code: 'es-ES' },
    'es-latam': { female: 'es-US-Neural2-A', male: 'es-US-Neural2-B', code: 'es-US' },
    'en': { female: 'en-US-Neural2-C', male: 'en-US-Neural2-D', code: 'en-US' },
    'fr': { female: 'fr-FR-Neural2-A', male: 'fr-FR-Neural2-B', code: 'fr-FR' },
    'de': { female: 'de-DE-Neural2-A', male: 'de-DE-Neural2-B', code: 'de-DE' },
    'pt': { female: 'pt-BR-Neural2-A', male: 'pt-BR-Neural2-B', code: 'pt-BR' }
  };

  const l = map[lang] || map['es-latam'];
  const languageCode = l.code;
  const voiceName = gender === 'male' ? l.male : l.female;

  // Ajustes para que la voz femenina suene menos robótica y más dulce
  const isFemale = gender !== 'male';
  const pitchAdjust = isFemale ? 2.0 : 0.0;
  const rateAdjust = isFemale ? 0.95 : 1.0;

  try {
    const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: { text },
        voice: { languageCode, name: voiceName },
        audioConfig: { 
          audioEncoding: 'MP3',
          pitch: pitchAdjust,
          speakingRate: rateAdjust
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google TTS API Error:', errorData);
      return res.status(response.status).json({ error: 'Error al contactar a Google TTS', details: errorData });
    }

    const data = await response.json();
    // data.audioContent es el MP3 codificado en base64
    return res.status(200).json({ audioContent: data.audioContent });

  } catch (error) {
    console.error('Error in TTS route:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
