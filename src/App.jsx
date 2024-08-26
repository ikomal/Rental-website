import react from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Aboutus from "./components/Aboutus"
import Contact from "./components/Contactus"
import "./app.css"
import Villas from "./components/Villas/Villas"
import Singlevilla from "./components/Villas/Singlevilla"

function App() {
  

  return (
    <div className="">
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        <Route path="/contactus" element={<Contact/>}></Route>
        <Route path="/villas" element={<Villas/>}></Route>
        <Route path="/villa/:id" element={<Singlevilla/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    </div>
  )
}

export default App
