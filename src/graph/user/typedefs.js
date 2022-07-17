import {gql } from "apollo-server"

//create example if this page manage all type and resolvers
//tips very interest, i need have only one query in my project!!
// if me want more of one query i need use extend to extends my query!!




export const useTypeDefs = gql`
  extend type Query {
    user (id: ID!) :User!,
    users: [User!]!
    }

  type User {
    id:ID!
    firstName:String!,
    lastName:String!,
    userName:String!,
    indexRef:Int!,
    createdAt:String
  }
  #posts needs create     
`;
