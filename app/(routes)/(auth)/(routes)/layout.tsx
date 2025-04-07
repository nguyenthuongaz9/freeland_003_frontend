import React from "react"
import { Header } from "../components/header"
import { Footer } from "../../(users)/components/footer"





export default function AuthLayout({
    children
} : {
        children: React.ReactNode
    }){

    
    return(
        <div className="w-full h-full bg-[#ded7c5] overflow-hidden">
            <Header/>
            <main className="w-full overflow-hidden  flex items-center justify-center ">
                {children}
            </main>
            <footer className="md:block hidden">
                <Footer/>
            </footer>
        </div>
    )
}
