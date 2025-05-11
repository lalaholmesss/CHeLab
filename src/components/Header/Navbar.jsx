import { NavLink } from "react-router-dom"


export default function Navbar() {
    return (
        <nav className="relative">
            <div className="max-w-[1720px] flex flex-row items-center content-center">
                
                <ul className="flex flex-row gap-x-[48px]">
                    <li><NavLink to="/" className={({ isActive }) =>
                    isActive ? "text-[#007bff] transition-all duration-300" : "hover:text-[#007bff] transition-all duration-300"
                    }>Home</NavLink></li>
                    <li><NavLink to="/researchers" className={({ isActive }) =>
                    isActive ? "text-[#007bff] transition-all duration-300" : "hover:text-[#007bff] transition-all duration-300"
                    }>Researchers</NavLink></li>
                    <li><NavLink to="/laborants" className={({ isActive }) =>
                    isActive ? "text-[#007bff] transition-all duration-300" : "hover:text-[#007bff] transition-all duration-300"
                    }>Laborants</NavLink></li>
                    <li><NavLink to="/students" className={({ isActive }) =>
                    isActive ? "text-[#007bff] transition-all duration-300" : "hover:text-[#007bff] transition-all duration-300"
                    }>Students</NavLink></li>
                    <li><NavLink to="/engineers" className={({ isActive }) =>
                    isActive ? "text-[#007bff] transition-all duration-300" : "hover:text-[#007bff] transition-all duration-300"
                    }>Engineers</NavLink></li>
                    <li><NavLink to="/comments" className={({ isActive }) =>
                    isActive ? "text-[#007bff] transition-all duration-300" : "hover:text-[#007bff] transition-all duration-300"
                    }>Comments</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}