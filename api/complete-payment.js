// Resurrected Building Projects - Complete Pi Payment
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { paymentId, txid } = req.body;
    if (!paymentId || !txid) return res.status(400).json({ error: 'Missing paymentId or txid' });

    const PI_API_KEY = process.env.PI_API_KEY;
    if (!PI_API_KEY) return res.status(500).json({ error: 'PI_API_KEY not set in Vercel' });

    const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${PI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ txid })
    });

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);

    // Payment success - here you can save order to database
    return res.status(200).json({ 
      success: true, 
      message: 'Payment Completed - Resurrected Building Projects',
      data 
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
