const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('template', {
  name: {
    type: Sequelize.STRING
  },
  frontHTML: {
    type: Sequelize.TEXT
  },
  backHTML: {
    type: Sequelize.TEXT
  },
  frontImageURL: {
    type: Sequelize.STRING
  },
  backImageURL: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
})
