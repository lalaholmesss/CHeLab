import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart} from '@fortawesome/free-solid-svg-icons'
import ChemicalCards from './ChemicalCards'
import DisplayApiData from '../FetchApiData/DisplayApiData'
import { useState, useEffect } from 'react'

export default function Home () {

  const [apiData, setApiData] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [finalPrompt, setFinalPrompt] = useState("");

  const handlePromptInput = () => {
    if(prompt.trim() === "") return;
    else {
      setFinalPrompt(prompt);
      setPrompt("");
    }
  }
  
  useEffect(() => {
    const fetchAIResponse = async () => {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_API_KEY}`;

      const requestBody = {
        contents: [
          {
            parts: [{ text: finalPrompt }]
          }
        ]
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        const text = data.candidates?.[0].content.parts?.[0].text;
        setApiData(text);
      } catch (error) {
        console.error('Error calling Gemini API:', error);
      }
    };

    fetchAIResponse();
  }, [finalPrompt]);
  
    return(
        <div className="max-w-[1720px] bg-[#EEFFF7] px-[40px] flex flex-col font-[Poppins] py-[32px]">
            <div className="flex items-center space-x-4 bg-[#f3fef9] p-4">
                <div className="flex items-center border border-[#AAA5A5] rounded-full px-4 py-2 w-[400px] shadow-sm bg-white">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 mr-2" />
                    <input
                    type="text"
                    placeholder="Enter prompt..."
                    className="w-full outline-none bg-transparent placeholder-gray-400"
                    value={prompt} onChange={(e) => {setPrompt(e.target.value)}}  />
                </div>
                <button className="cursor-pointer bg-[#00BF63] text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600 transition" onClick={handlePromptInput}>
                    Ask
                </button>
            </div>
            <DisplayApiData apiData={apiData}/>
            <ChemicalCards />
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