const front = require('./html/thankyou02front')
const back = require('./html/thankyou02back')

const cardDetails = {
  description: 'Thank You',
  to: {
    name: 'George Washington',
    address_line1: '7590 Pelham Drive',
    address_line2: '',
    address_city: 'Chesterland',
    address_state: 'OH',
    address_zip: '44026'
  },
  from: {
    name: 'Thomas Jefferson',
    address_line1: '142 Lions Court',
    address_line2: '',
    address_city: 'Lake Zurich',
    address_state: 'IL',
    address_zip: '60047'
  },
  front: front,
  back: back,
  merge_variables: {
    greeting: 'Dear George',
    message:
      "Thank you so much for your help writing that letter to England.  I can't believe how everybody insisted on signing it!  I must assume Hancock is compensating for something.",
    salutation: 'Best Regards,',
    fromName: 'Tommy'
  }
}

module.exports = cardDetails
