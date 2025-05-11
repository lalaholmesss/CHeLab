import Header from "./components/Header/Header"
import { Routes, Route, useLocation } from "react-router-dom"
import HomePg from "./pages/HomePg"
import ResearchersPg from "./pages/ResearchersPg"
import Laborants from "./pages/LaborantsPg"
import Students from "./pages/StudentsPg"
import Engineers from "./pages/EngineersPg"
import Comments from "./pages/CommentsPg"
import Footer from "./components/Footer"
import LoginPg from "./pages/LoginPg"
import SignUp from "./pages/SignUp"

function App() {
  const location = useLocation();
  const noHeaderFooter = ["/login", "/signup"];
  const hideHeaderFooter = noHeaderFooter.includes(location.pathname); // if the noHeaderFooter includes current loc path, then hideHeaderFooter becomes true, else false

  return (
    <>
      {!hideHeaderFooter && <Header/>}
      
      <Routes>
        <Route path="/" element={<HomePg/>}/>
        <Route path="/researchers" element={<ResearchersPg/>} />
        <Route path="/laborants" element={<Laborants/>}/>
        <Route path="/students" element={<Students/>} />
        <Route path="/engineers" element={<Engineers/>} />
        <Route path="/comments" element={<Comments/>} />
        <Route path="/login" element={<LoginPg/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      
    </>
  )
}

export default App
