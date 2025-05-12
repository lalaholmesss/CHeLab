import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartSimple } from "@fortawesome/free-solid-svg-icons"
import chart from "../assets/images/Chart.png"

export default function Engineers () {
   return(
        <div className="h-screen max-w-[1720px] px-[54px] bg-[#EEFFF7] font-[Poppins] items-start py-[24px]">
            <h1 className="text-[40px] text-[#1AC2EA] pb-[24px]"><FontAwesomeIcon icon={faChartSimple} className="pr-[12px]"/>Reactor Performance</h1>
            <img src={chart} alt="placeholder" />
        </div>
    )
}

