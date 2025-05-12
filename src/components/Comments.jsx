import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Comments () {
    let [comment, setComment] = useState("");
    let [submittedComment, setSubmittedComment] = useState([]);

    const handleSubmit = () => {
        if(comment.trim() === ""){
            return;
        }else setSubmittedComment([comment, ...submittedComment]);
        setComment("");
    }

    return(
        <div className="h-screen max-w-[1720px] px-[54px] bg-[#EEFFF7] font-[Poppins] items-start py-[24px]">
            <div>
                <h1 className="text-[40px] text-[#1AC2EA] pb-[24px]"><FontAwesomeIcon icon={faMessage} className="pr-[12px]" />Comments</h1>
                <textarea  className="bg-white w-full h-24 p-2 border rounded-lg focus:outline-none shadow-md border-[#807E7E]"
                placeholder="Write something..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <button className="mt-2 px-4 cursor-pointer py-2 bg-[#1AC2EA] text-white rounded-lg"
                onClick={handleSubmit}>Post</button>
            </div>
            
            <div className="mt-6 space-y-3 ">
                {submittedComment.map((c, index) => (
                <div key={index} className="break-words p-3 bg-white rounded-lg">
                    <p>{c}</p>
                </div>
                ))}
            </div>
        </div>
    )
}