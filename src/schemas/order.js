const mongoose = require('mongoose')
const Schema = require('mongoose')

const orderSchema = new mongoose.Schema({
  customer: {
    type: Schema.Types.ObjectId,
    required: true
  },
  orderNumber: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  changed: {
    type: Date,
    default: Date.now
  },
  orderlines: {
    type: [Schema.Types.ObjectId],
    default: []
  },
  totalAmount: {
    type: Number
  }
})

module.exports = orderSchema
