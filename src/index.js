import { ApolloServer,gql } from 'apollo-server'
import { resolvers, typeDefs } from './graph/schema'
// here i tick server apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,

})

server.listen(4003).then(({url}) => {
    console.log(`server listening here ${url}`)
})