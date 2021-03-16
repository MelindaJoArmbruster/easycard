const router = require('express').Router()
module.exports = router
// const { v4: uuidv4 } = require("uuid");
const stripe = require('stripe')(process.env.STRIPE_SK)

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount

  // Calculate the order total on the server to prevent

  // people from directly manipulating the amount on the client

  return 299
}

router.post('/', (req, res) => {
  const {product, token} = req.body
  console.log('PRODUCT ', product)
  console.log('PRICE ', product.price)
  // const idempontencyKey = uuidv4();
  console.log('Product Name: ', product.name)

  return stripe.customers
    .create({
      email: token.email,
      source: token.id
    })
    .then(customer => {
      stripe.charges.create({
        amount: 299,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: 'Postcard'
      })
    })
    .then(result => res.status(200).json(result))
    .catch(err => {
      res.status(402).send('Payment Failed')
      console.log(err)
    })
})
