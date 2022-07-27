import { ApolloServer} from 'apollo-server'
import { resolvers, typeDefs } from './graph/schema'
import { context } from './graph/context'
// here i tick server apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context, 
})

server.listen(4003).then(({url}) => {
    console.log(`server listening here ${url}`)
})