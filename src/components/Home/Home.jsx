import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart} from '@fortawesome/free-solid-svg-icons'

export default function Home () {
    return(
        <div className="max-w-[1720px] bg-[#EEFFF7] px-[40px] flex flex-col font-[Poppins]">
            <div className="flex items-center space-x-4 bg-[#f3fef9] p-4">
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-[300px] shadow-sm bg-white">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 mr-2" />
                    <input
                    type="text"
                    placeholder="Search..."
                    className="w-full outline-none bg-transparent placeholder-gray-400"
                    />
                </div>
                <button className="cursor-pointer bg-[#00BF63] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-green-600 transition">
                    Search
                </button>
            </div>
            <div className="border-2 border-dashed border-[#00BF63] rounded-[50px] px-[40px] py-[32px] bg-white inline-block">
                <div className="flex items-center mb-4 gap-[12px]">
                    <FontAwesomeIcon icon={faHeart} className="text-[#00BF63]"/>
                    <h2 className="text-[#00BF63] font-semibold text-lg">Favorites</h2>
                </div>
                <div className="space-y-2">
                    <button className="w-full border border-green-500 rounded-[50px] px-4 py-2 text-[#00BF63] text-left bg-[#EEFFF7] hover:bg-green-100">
                    Neylon-6,6
                    </button>
                    <button className="w-full border border-green-500 rounded-[50px] px-4 py-2 text-[#00BF63] text-left bg-[#EEFFF7] hover:bg-green-100">
                    PET
                    </button>
                </div>
            </div>
        </div>
    )
}