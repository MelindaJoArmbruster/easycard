const router = require('express').Router()
module.exports = router
const stripe = require('stripe')(process.env.STRIPE_SK)

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount

  // Calculate the order total on the server to prevent

  // people from directly manipulating the amount on the client

  return 299
}

router.post('/', async (req, res) => {
  const {items} = req.body

  // Create a PaymentIntent with the order amount and currency

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),

    currency: 'usd'
  })

  res.send({
    clientSecret: paymentIntent.client_secret
  })
})
