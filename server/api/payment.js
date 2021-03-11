const router = require('express').Router()
module.exports = router
const stripe = require('stripe')(process.env.STRIPE_PK)
