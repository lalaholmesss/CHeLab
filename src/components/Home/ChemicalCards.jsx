import PEImg from '../../assets/images/PE.png';
import PPImg from '../../assets/images/PP.jpg';
import NylonImg from '../../assets/images/Nylon.jpg';
import PETImg from '../../assets/images/PET.png';
import PCImg from '../../assets/images/PC.png';

export default function ChemicalCards() {
const data = [
  {
    name: "Polyethylene (PE)",
    img: PEImg,
    type: "Free Radical",
    prod: "110 Mt",
    cond: "70–90°C, 1–2 MPa"
  },
  {
    name: "PET",
    img: PETImg,
    type: "Condensation",
    prod: "79 Mt",
    cond: "50–70°C, 1–3 atm"
  },
  {
    name: "Polycarbonate (PC)",
    img: PCImg,
    type: "Free Radical",
    prod: "110 Mt",
    cond: "70–90°C, 1–2 MPa"
  },
   {
    name: "Nylon-6,6",
    img: NylonImg,
    type: "Condensation",
    prod: "1.4 Mt",
    cond: "80–300°C"
  },
   {
    name: "Polypropylene (PP)",
    img: PPImg,
    type: "Ziegler–Natta",
    prod: "79 Mt",
    cond: "50–70°C, 1–3 atm"
  }
];

  return (
    <div className="flex gap-6 justify-center items-start py-9 cursor-pointer">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg w-72 p-4 hover:scale-[1.01] transition-all"
        >
          <img
            src={item.img}
            alt={item.name}
            className="rounded-lg h-36 w-full object-cover"
          />
          <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
          <div className="text-sm text-gray-600 mt-2 space-y-1">
            <p>
              <span className="font-medium text-black pr-[24px]">Type:</span> {item.type}
            </p>
            <p>
              <span className="font-medium text-black pr-[24px]">Prod:</span> {item.prod}
            </p>
            <p>
              <span className="font-medium text-black pr-[24px]">Cond:</span> {item.cond}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

   
