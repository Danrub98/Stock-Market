const { AuthenticationError } = require('apollo-server-express');
const { User } = require ('../models');
const { signToken } = require('../utils/auth')

const resolver = {
    Query: {
        me: async (parent, args, context) =>{
            if(context.user){
                const data = await User.findOne({_id:context.user._id});
                return data;
            }
            throw new AuthenticationError('Not able to log in')
            
        }
    },
    Mutation: {
        login: async (parent, args) =>{
            const loginData = await User.findOne({email:args.email})
            if(!loginData) {
                throw new AuthenticationError('Incorrect password or email!')
            }
            const checkPassword = await loginData.isCorrectPassword(args.password)
            if(!checkPassword) {
                throw new AuthenticationError('Incorrect password or email!')
            }
        },
        addUser: async (parent, args, ) =>{
            const userData = await User.create(args);
            const token = signToken(userData)
            return {userData, token}
        }
    }
}

module.exports = resolvers