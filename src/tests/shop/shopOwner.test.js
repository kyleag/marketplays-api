/* donot implement for now
const expect = require('expect')
const { request } = require('../../utils/test')
const Vendor = require('../../models/vendor')

const { VendorFactory } = require('../../utils/factories/')
const { jsonToGraphQLQuery } = require('json-to-graphql-query')

describe('Shop Owner', () => {
  // create dummy users that will be shop
  let users = []
  before(async () => {
    for (let x = 0; x <= 5; x++) {
      const vendor = VendorFactory.generate()
      users.push(await Vendor.SignupUser(vendor))
    }
  })

  it('should also vendor with store', () => {
    return request({
      query: jsonToGraphQLQuery({
        query: {
          vendor: {
            __args: {
              _id: `${users[0]._id}`
            },
            _id: true,
            stores: {
              _id: true,
              businessName: true
            }
          }
        }
      })
    })
      .expect(res => {
        expect(res.body).toHaveProperty('data.vendor.shops')
        expect(res.body.data.vendor.stores)
      })
  })
})

*/
