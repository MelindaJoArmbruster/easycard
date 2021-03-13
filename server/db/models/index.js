const User = require('./user')

const db = require('../db')
const Template = require('./template')
const Order = require('./order')
//import models here

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

Template.hasMany(Order)
Order.belongsTo(Template)

module.exports = {
  // Include your models in this exports object as well!
  db,
  User,
  Template,
  Order
}
