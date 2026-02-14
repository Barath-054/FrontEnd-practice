import Navbar from "./Navbar";
import { Routes , Route} from 'react-router-dom'
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import "./assets/style.css"



export default function App() {
  return (
    <div>
      <Navbar />
      <style/>
      <Routes>
        <Route path="/Home" element = {<Home/>}></Route>
        <Route path="/About" element = {<About/>}></Route>
        <Route path="/Contact" element = {<Contact/>}></Route>
      </Routes>
    </div>
  )
}