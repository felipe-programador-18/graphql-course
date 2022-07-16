import { ApolloServer,gql } from 'apollo-server'

// here i tick server apollo
const server = new ApolloServer({
    typeDefs: gql`
    type Query {
        user: User,
        new : NewUser 
      }
     type User {
      name: String!,
      id: ID!,
      telefone: Int
     }

     type NewUser {
      email: String!
      adress: String!    
      }

    `,
    resolvers: {
      Query: {
        user: () => {
          return {
            id:'Programmer',
            name:"Pmertins",
            telefone: 3232323
          }
        },

        new: () => {
          return {
           email:'machadofelipe2016@outlook.com',
           adress: 'av circular 921'
          }
        }
      } 
    }
    
});

server.listen(4003).then(({url}) => {
    console.log(`server listening here ${url}`)
})