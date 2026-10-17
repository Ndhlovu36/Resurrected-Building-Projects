# Resurrected Building Projects - Pi Mainnet LIVE
Part of Ndhlovu36 6-App Ecosystem | Johannesburg, South Africa
Pi Utility: Get Instant Building Quotes | Pay 1 Pi | Mainnet Enabled

Live: https://resurrected-building-projects.vercel.app
Ecosystem Hub: https://ndhlovu36.github.io/gauteng-shopping-hub/ecosystem.html

## What This App Does
Professional building, renovation and construction services in South Africa.
Users login with Pi and pay 1 Pi to get an instant quote.

## Services
- New Building Construction
- House Renovations & Extensions
- Roofing & Painting
- Plumbing & Electrical
- Project Management

## How Pi Payment Works
1. User logs in with Pi - username saved across all 6 apps
2. User enters location, site address, service type, WhatsApp number
3. Pi.createPayment 1 Pi for quote - memo: Quote for [service]
4. Order saved to Pi Orders-All 5 Apps sheet with TxID / PaymentID
5. We call you on WhatsApp to finalize

## The 6-App Ecosystem
Shopping Hub (5 Pi) -> Marble Floors SA -> Agri Equipment Market -> Resurrected Building Projects (1 Pi quote) -> Revealed Logistics (delivery) -> Revelation Bus Company (transport)

## Tech
SDK: https://sdk.minepi.com/pi-sdk.js
Pi.init({version: "2.0", sandbox: false})
Auth: Pi.authenticate(['username','payments'])
Payments: createPayment / approve / complete

## Compliance
Privacy: /privacy.html
Terms: /terms.html
Legal: /legal.html
Report: /report.html

## Contact
Business: resurrectedbuildings@gmail.com
Developer: dumandhlovu361@gmail.com

## Sister Apps
Gauteng Shopping Hub [LIVE]: https://ndhlovu36.github.io/gauteng-shopping-hub/
Marble Floors SA [LIVE]: https://ndhlovu36.github.io/marble-floors-south-africa/
Agri Equipment Market [LIVE]: https://ndhlovu36.github.io/agricultural-equipment-market/
Revelation Bus Company: https://ndhlovu36.github.io/revelation-bus-company/
Revealed Logistics: https://ndhlovu36.github.io/revealed-logistics/

© 2026 Resurrected Building Projects. All rights reserved.
Business: resurrectedbuildings@gmail.com | Developer: dumandhlovu361@gmail.com | Pi Mainnet Wallet Verified