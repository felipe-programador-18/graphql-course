
const  users = async(_, __, { getUsers }) => { 
  const users = await getUsers()
  return users.json();
}

const user = async (_, {id,firstName}, { getUsers }) => {
  console.log("first name here", firstName)

  const response = await getUsers('/' + id)
  const user = await response.json()
  //console.log(user)
  return user;
}


export const useResolvers = {
   Query: {
      users,
      user
    } 
}