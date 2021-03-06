const { schemaComposer } = require('graphql-compose')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 12

const TC = schemaComposer.getOTC('Vendor')

// remove hahsedPassword from User type
TC.removeField('hashedPassword')
schemaComposer.getITC('UpdateByIdUserInput')
  .removeField([ 'hashedPassword', 'created', 'changed', 'lastActive' ])
  .addFields({
    password: 'String'
  })

// update 'updateById' to apply hash
const oldUpdateById = schemaComposer.Mutation.getField('updateUserById')
schemaComposer.Mutation.removeField('updateUserById')

TC.addResolver({
  name: 'updateUserById',
  type: 'UpdateByIdUserPayload',
  args: oldUpdateById.args,
  description: oldUpdateById.description,
  resolve: async ({ source, args }) => {
    if (args.record.password) {
      args.record.hashedPassword = await bcrypt.hash(args.record.password, SALT_ROUNDS)
    }
    return oldUpdateById.resolve(source, args)
  }
})

schemaComposer.Mutation.addFields({
  updateUserById: TC.getResolver('updateUserById')
})
