export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST required' });

  const { paymentId } = req.body || {};
  if (!paymentId) return res.status(400).json({ error: 'paymentId missing' });

  const API_KEY = process.env.PI_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'PI_API_KEY not set in Vercel' });

  try {
    const r = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
    const data = await r.json();
    console.log('APPROVE:', paymentId, data);
    return res.status(r.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}