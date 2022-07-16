// this way resolvers my query
//remind all typedefs needs resolvers!!

const  users = () => {
    return [
     {
        id: "3",
        name:"Felipe Programmer 18",
     
     },
     
     {  id:'1',
        name:"Programmer Felipe",
      
     },
    
    ]
}

const user = () => {
    return {
        id: 32323,
        name:"Felipe Programmer 18",
    }
}


export const useResolvers = {
   Query: {
      user,
      users
    } 
}