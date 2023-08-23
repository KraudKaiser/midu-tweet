import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

//con esto, forzamos al sistema que no guarde datos en cache, siendo dinamico
export const dynamic = "force-dynamic"


export async function GET(request:NextRequest){
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")

    if(code !== null){
        const supabase = createRouteHandlerClient({cookies})
        //Cambiamos el codigo para que el usuario inicie sesion
        await supabase.auth.exchangeCodeForSession(code)
    }
    //si no tiene codigo correcto, redirige al origen
    return NextResponse.redirect(requestUrl.origin )
}