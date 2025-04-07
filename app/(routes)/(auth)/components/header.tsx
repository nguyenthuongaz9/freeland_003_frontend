import { PhoneCall } from "lucide-react"








export const Header = () => {


    return (
        <header className=" md:fixed hidden md:block  w-full h-20 top-0 left-0 z-50">
            <div className="overflow-hidden relative flex items-center justify-between bg-[#242e52] w-full px-6 py-4 md:px-60 shadow-xl drop-shadow-lg z-30">
        
                <span className="text-white font-bold text-xl cursor-pointer">Logo</span>


                <div className="flex items-center gap-4">
                    <p className="flex items-center justify-center gap-2 text-white font-semibold">
                        
                        <PhoneCall size={20} className="text-white" /> 

                        Hotline:
                        <span className="text-[#eb5938] font-semibold underline">1234567890</span>
                    </p>
                </div>

            </div>
        </header>
    ) 
}
