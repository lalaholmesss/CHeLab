import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import chart from "../assets/images/Chart.png"

export default function Researchers () {
    return(
        <div className="h-screen max-w-[1720px] px-[54px] bg-[#EEFFF7] font-[Poppins] items-start py-[24px]">
            <h1 className="text-[40px] text-[#1AC2EA] pb-[24px]"><FontAwesomeIcon icon={faGlobe} className="pr-[12px]"/>Global Production (2023)</h1>
            <img src={chart} alt="Chart" />
        </div>
    )
}