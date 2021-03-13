const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('order', {
  to_name: {
    type: Sequelize.STRING
  },
  to_address_line1: {
    type: Sequelize.STRING
  },
  to_address_line2: {
    type: Sequelize.STRING
  },
  to_address_city: {
    type: Sequelize.STRING
  },
  to_address_state: {
    type: Sequelize.STRING
  },
  to_address_zip: {
    type: Sequelize.STRING
  },
  from_name: {
    type: Sequelize.STRING
  },
  from_address_line1: {
    type: Sequelize.STRING
  },
  from_address_line2: {
    type: Sequelize.STRING
  },
  from_address_city: {
    type: Sequelize.STRING
  },
  from_address_state: {
    type: Sequelize.STRING
  },
  from_address_zip: {
    type: Sequelize.STRING
  },
  merge_variables_greeting: {
    type: Sequelize.STRING
  },
  merge_variables_message: {
    type: Sequelize.STRING
  },
  merge_variables_salutation: {
    type: Sequelize.STRING
  },
  merge_variables_fromName: {
    type: Sequelize.STRING
  },
  lobId: {
    type: Sequelize.STRING
  },
  lobPdfURL: {
    type: Sequelize.STRING
  },
  lobFrontPngURL: {
    type: Sequelize.STRING
  },
  lobBackPngURL: {
    type: Sequelize.STRING
  },
  lobMailType: {
    type: Sequelize.STRING
  },
  lobExpectedDeliveryDate: {
    type: Sequelize.STRING
  }
})
