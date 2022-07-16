import {ApolloServer,gql } from 'apollo-server'



const callApollo = new ApolloServer({
   typeDefs: gql`
    type Query {
        user: User,
        anotherUser : NewUser
       }
    type User {
       name:String!,
       phone:Int,
       adress:String
      }

    type NewUser {
      age:Int!,
      salary:Float!,
      email: String
       }  
   `,
   resolvers:{
     Query: {
        user: () => {
        return { 
         name:4343, 
         phone:32343424,
         adress:"avenida circular 921"  
          }    
        },
       anotherUser: () => {
        return {
          age:32,
          salary: 15000.50,
          email:'machadofelipe2016@outlook.com'   
        }
       }    
     }
   }

})

callApollo.listen(4003).then(({url}) => {
    console.log(`LISTENING ANOTHER SERVER TO PRACTICE MORE AND MORE ABOUT GRAPHQL ${url}  `)
})