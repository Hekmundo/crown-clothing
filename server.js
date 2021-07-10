const express = require('express');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') require('dotenv').config(); // For production, Heroku takes the .env variables
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(compression()); // Heroku doesn't have native gzipping
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-wroker.js'));
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'gbp',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
      console.log(stripeErr);
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server is listening on port ${PORT}`);
});
