const router = require('express').Router()
module.exports = router

router.use('/templates', require('./templates'))
router.use('/payment', require('./payment'))
router.use('/orders', require('./orders'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
