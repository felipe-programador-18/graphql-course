import fetch from "node-fetch"

const  users = async () => {
  const users = await fetch("http://localhost:3000/users")
    return users.json();
}

const user = async () => {
    const user = await fetch("http://localhost:3000/users")
    return user.json()
}


export const useResolvers = {
   Query: {
      user,
      users
    } 
}