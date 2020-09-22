const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HTMhlBX8MOzTQz1hEaHpO9AZId7j3YM2BFYYUMBrwDOhpeXDs1GqCDs9gHkJMzh1wewEpR1CZvETL7QsgtHGzdL00gfO7QMG3"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
     
    description: 'Software development services',
    shipping: {
    name: 'Jenny Rosen',
    address: {
      line1: '510 Townsend St',
      postal_code: '98140',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  },
  amount: total,
  currency: 'inr', // subunits of the currency
  payment_method_types: ['card'],
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api