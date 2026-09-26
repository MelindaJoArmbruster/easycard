const Lob = require('lob')(process.env.LOB_API_TEST_KEY)

function lobApiPostcard(cardDetails) {
  return Lob.postcards.create(cardDetails)
}

module.exports = lobApiPostcard
