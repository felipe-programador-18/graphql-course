import { ApolloServer,gql } from 'apollo-server'

// here i tick server apollo
const server = new ApolloServer({
    typeDefs: gql`
    type  Query{
        hello:String
        }
    
    `,
    resolvers:{
        Query:{
            hello: () => {
                "hello again"
            }
        }
    }
})

server.listen(4003).then(({url}) => {
    console.log(`server listening here ${url} `)
})