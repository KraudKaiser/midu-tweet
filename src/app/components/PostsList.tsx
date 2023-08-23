import PostCard from "./PostCard"
import { type Post } from "../types/posts"

export default function PostsList({posts}: {posts: Post[] | null}){
    return(
        <pre>
      {
        posts?.map(post =>{
          const {
            id,
            user,
            content} = post

            const {name, username, avatar_url} = user
          return(
            <PostCard name={name} username={username} avatar_url={avatar_url} content={content} key={id} />
          )
        })
      }
     </pre>
    )
}