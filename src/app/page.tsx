import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers"
import { AuthButtonServer } from "./components/AuthButtonServer"
import {redirect} from "next/navigation"
import PostsList from "./components/PostsList"
import { Database } from "./types/database"
import ComposePost from "./components/ComposePost"
export default async function Home() {
  const supabase = createServerComponentClient<Database>({cookies})
  const {data : {session} } = await supabase.auth.getSession()


  if(session === null){
    redirect("/login")
  }
  
  const {data: posts} = await supabase
  .from("posts")
  .select("*, user:users(name, username, avatar_url)")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <section className="max-w-[800px] w-full mx-auto border-l border-r border-white/30 h-full min-h-screen">
        <AuthButtonServer />
        <ComposePost  avatar_url={session.user?.user_metadata?.avatar_url} />
        <PostsList posts={posts} />
      </section>
     
    </main>
  )
}
