import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"


export default function ComposePost({
    avatar_url
}:{
    avatar_url:string
}){

    const addPost = async(formData:FormData) =>{
        "use server"
        const content = formData.get("content")
        if(content === null){
            return
        }
        const supabase = await createServerActionClient({cookies})
        const {data: {user}} = await supabase.auth.getUser()
        if(user === null){
            return
        }

        await supabase.from("posts").insert({content, user_id:user.id})

        revalidatePath("/")

    }

    return(
        <form action={addPost} className="flex flex-row space-x-4 p-4 border-b border-white/20">
            <img className="rounded-full w-10 h-10 object-contain" src={avatar_url} />
            <div className="flex flex-1 flex-col gap-y-4">
                <textarea name="content" rows={4} className="w-full text-xl bg-black placeholder-gray-500" placeholder="¿En que piensas?"></textarea>
                <button type="submit" className="bg-sky-500 font-bold rounded-full px-5 py-2 self-end">Postear</button>
            </div>
        </form>
    )
}