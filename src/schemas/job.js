const mongoose = require('mongoose')
const Schema = require('mongoose')
const slugify = require('slugify')

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    default: function () { // enables access to 'this'
      return slugify(this.title)
    }
  },
  description: {
    type: String
  },
  instructions: {
    type: String
  },
  biddable: {
    type: Boolean
  },
  openingMarketBid: {
    type: Number
  },
  type: {
    type: String // @TODO either 'hourly' or 'project'
  },
  timeframe: {
    type: Number // in minutes
  },
  seoTitle: {
    type: String
  },
  seoKeywords: {
    type: String
  },
  seoDescription: {
    type: String
  },
  currency: {
    type: String
  },
  requiredCertificates: {
    type: [String] // @TODO - array of certificates
  },
  category: {
    type: Schema.Types.ObjectId // job categories
  },
  serviceRequest: {
    type: Schema.Types.ObjectId
  }
})

module.exports = jobSchema
