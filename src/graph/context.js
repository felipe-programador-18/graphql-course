import fetch from "node-fetch"
export const context = () => {
    return {
      getUsers: (path = '/') => { 
       const url = "http://localhost:3000/users" + path
       console.log("get users called path", path,url)
       return  fetch(url);
    },
    }
  }