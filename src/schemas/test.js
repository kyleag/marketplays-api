const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const slugify = require('slugify')

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    street: {
      type: String
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    zipCode: {
      type: String
    }
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    index: true
  },
  slug: {
    type: String,
    default: function () { // enables access to 'this'
      return slugify(this.name)
    }
  }
})

testSchema.plugin(uniqueValidator)

module.exports = testSchema
