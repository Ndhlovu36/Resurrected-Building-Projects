// Gauteng Shopping Hub - Complete Pi Payment
// File: api/complete-payment.js

export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS for Pi Browser
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { paymentId, txid } = req.body;

    if (!paymentId || !txid) {
      return res.status(400).json({ error: 'Missing paymentId or txid' });
    }

    const PI_API_KEY = process.env.PI_API_KEY;
    
    if (!PI_API_KEY) {
      return res.status(500).json({ error: 'PI_API_KEY not set in Vercel' });
    }

    // Complete payment on Pi Blockchain
    const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${PI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ txid: txid })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Pi Complete Error:', data);
      return res.status(response.status).json(data);
    }

    // SUCCESS - Payment completed for Gauteng Shopping Hub
    return res.status(200).json({
      success: true,
      message: 'Payment completed for Gauteng Shopping Hub',
      data: data
    });

  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
