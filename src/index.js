import { ApolloServer} from 'apollo-server'
import { resolvers, typeDefs } from './graph/schema'
import fetch from "node-fetch"
// here i tick server apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch,
     
    }
  }
})

server.listen(4003).then(({url}) => {
    console.log(`server listening here ${url}`)
})