

const  users = async(_, __, {fetch}) => { 
  const users = await fetch("http://localhost:3000/users")
  return users.json();
}

const user = async (_, {id}, { fetch }) => {
  console.log(fetch)
  const response = await fetch("http://localhost:3000/users/" + id)
  const user = await response.json()
  //console.log(user)
  return user;
}


export const useResolvers = {
   Query: {
      user,
      users
    } 
}