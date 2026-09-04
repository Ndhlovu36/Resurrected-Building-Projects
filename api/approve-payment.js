// Resurrected Building Projects - Approve Pi Payment
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { paymentId } = req.body;
    if (!paymentId) return res.status(400).json({ error: 'Missing paymentId' });

    const PI_API_KEY = process.env.PI_API_KEY;
    if (!PI_API_KEY) return res.status(500).json({ error: 'PI_API_KEY not set in Vercel' });

    const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
      method: 'POST',
      headers: { 'Authorization': `Key ${PI_API_KEY}` }
    });

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    
    return res.status(200).json({ success: true, message: 'Approved - Resurrected Building Projects', data });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
