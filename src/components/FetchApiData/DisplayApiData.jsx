
export default function DisplayApiData({ apiData }) {
    if (!apiData) return console.log("Loading...")
    console.log(apiData)
    return(
        <div className="w-full bg-white rounded-lg py-[24px] px-[16px] shadow">
            {apiData}
        </div>
    )
}