require('../../secrets')

const Lob = require('lob')(process.env.LOB_API_TEST_KEY)
const cardDetails = require('./cardDetails')

async function lobApiPostcard(cardDetails) {
  let lobResponse
  await Lob.postcards.create(cardDetails, (err, res) => {
    console.log(err, res)
    lobResponse = res
  })
  return lobResponse
}

module.exports = lobApiPostcard
