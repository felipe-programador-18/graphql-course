import { ApolloServer, gql } from "apollo-server";

//create another typedefs simulating get another date!!

export const useAnothertype = gql`
 extend type Query {
   brand: newBrand
  } 
  type newBrand{
   namebrand: String!
   years: Int
  }

`;