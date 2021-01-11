const mongoose = require('mongoose')
const Schema = require('mongoose')
const options = {
  // add discriminators for distinguish properties of certain type
  // in this case, attribute or option
  discriminatorKey: 'kind'
}

const serviceSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  workforceThreshold: {
    type: Number
  },
  projectManager: {
    type: Schema.Types.ObjectId,
    default: null
  },
  currency: {
    type: String
  },
  department: {
    type: Schema.Types.ObjectId,
    default: null
  },
  attributes: {
    type: [Schema.Types.ObjectId],
    default: []
  },
  variants: {
    type: [Schema.Types.ObjectId],
    default: []
  }
}, options)

module.exports = serviceSchema
