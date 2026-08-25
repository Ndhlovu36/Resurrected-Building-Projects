# 🚌 Revelation Bus Company - Pi Powered Transport

Bus ticket booking app for South Africa powered by Pi Network.

**Live Demo:** https://ndhlovu36.github.io/revelation-bus-company/
**Developer:** Ndhlovu36 - Johannesburg, Gauteng

### Features
- Search buses JHB to DBN, CPT, PTA, Limpopo
- Pay with Pi (Pi SDK 2.0)
- QR Ticket + Booking History
- Integrated with Revealed Logistics for cargo

### Pi Integration
```js
Pi.init({ version: "2.0", sandbox: false });
Pi.authenticate(['payments','username'])
Pi.createPayment({ amount, memo: "Bus Ticket" })
