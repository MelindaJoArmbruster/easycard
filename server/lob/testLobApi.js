const lobApiPostcard = require('../lob')
const cardDetails = require('./cardDetails.js')

async function test(cardDetails) {
  lobApiResponse = await lobApiPostcard(cardDetails) //this is the main course!
  console.log(lobApiResponse)
}

test(cardDetails)
