
const post = async (_,{id},{ getPosts}) => {
    const response = await getPosts("/" + id)    
    return  response.json()

}
const posts = async (_,__, {getPosts}) => {
    const post  = await getPosts()
    return post.json();
    
}

 
export const useAnotherSolve = {
    Query:{ post,posts },
    Post: { newrules: (parent) => {
        console.log("here inside my parameter!!!", parent.id)
        return Math.random();
    }  }
}