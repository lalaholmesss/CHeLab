import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons"

export default function Laborants () {
    return(
         <div className="h-screen max-w-[1720px] px-[54px] bg-[#EEFFF7] font-[Poppins] items-start py-[24px]">
            <h1 className="text-[40px] text-[#1AC2EA] pb-[24px]"><FontAwesomeIcon icon={faHelmetSafety} className="pr-[12px]"/>Safety Protocols</h1>
            <div className="p-[32px] rounded-[20px] bg-white shadow-md">
                <ul>
                    <li className="cursor-pointer text-black">PPE: Gloves, goggles, lab coat</li>
                    <li className="cursor-pointer text-black">Catalysts under inert atmosphere</li>
                    <li className="cursor-pointer text-black">Waste: Neutralize then dispose</li>
                </ul>
            </div>
        </div>
    )
}

