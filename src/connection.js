import {ApolloServer} from 'apollo-server'
import { resolvers, typeDefs } from './graph/schema'

const callApollo = new ApolloServer({
   typeDefs,
   resolvers,
})

callApollo.listen(4003).then(({url}) => {
    console.log(`LISTENING ANOTHER SERVER TO PRACTICE MORE AND MORE ABOUT GRAPHQL ${url}  `)
})