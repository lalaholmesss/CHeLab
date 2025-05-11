import { Link } from "react-router-dom"
import Navbar from "./Navbar"

export default function Header() {
    return(
        <div className="max-w-[1720px] pt-7 mx-[32px] pb-9 ">
            <div className="flex justify-between items-center">
                <div className="w-20">
                    <img src="src/assets/images/CheLab-logo.png" alt="Logo" className="w-full h-auto" />
                </div>
                <div>
                    <Navbar />
                </div>
                <div className="flex flex-row justify-between gap-4">
                    <button className="text-[#007bff] border border-[#007bff] bg-transparent hover:bg-[#007bff] hover:text-white py-[8px] px-[16px] rounded-lg m-auto transition-colors duration-200 cursor-pointer" to=""><Link to="/login">Login</Link></button>
                    <button className="text-[#007bff] border border-[#007bff] bg-transparent hover:bg-[#007bff] hover:text-white py-[8px] px-[16px] rounded-lg m-auto transition-colors duration-200 cursor-pointer" to="">Sign Up</button>
                </div>
            </div>
        </div>
    )
}