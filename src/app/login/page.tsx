import { AuthButtonServer } from "../components/AuthButtonServer";

export default function Login(){
    return(
        <section className="grid place-content-center min-h-screen">
            <h1 className="text-xl font-bold mb-4">Inicia Sesion en Midu-Tweet</h1>
            <AuthButtonServer />    
        </section>
        )
}