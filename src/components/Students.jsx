import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"

export default function Students () {
    return(
        <div className="h-screen max-w-[1720px] px-[54px] bg-[#EEFFF7] font-[Poppins] items-start py-[24px]">
            <h1 className="text-[40px] text-[#1AC2EA] pb-[24px]"><FontAwesomeIcon icon={faBookOpen} className="pr-[12px]"/>Learning Modules</h1>
            <div className="p-[32px] rounded-[20px] bg-white shadow-md">
                <ul>
                    <li className="text-[#616161] cursor-pointer hover:text-black transition duration-300 ease-in-out">Free-Radical Mechanisms</li>
                    <li className="text-[#616161] cursor-pointer hover:text-black transition duration-300 ease-in-out">Step-Growth (Condensation)</li>
                    <li className="text-[#616161] cursor-pointer hover:text-black transition duration-300 ease-in-out">Ziegler–Natta Catalysis</li>
                </ul>
            </div>
        </div>
    )
}