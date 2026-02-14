
// import React from 'react';
// import Greeting from './Greeting';
// import {Button} from "./Button";
// import Home from "./Component/Home";
// import About from "./Component/About";
// import Contact from "./Component/Contact";
// import Greeting from "./Component/Greeting";
// import Newgreet from "./Component/Newgreet";
// import { useEffect, useState } from "react";


// function App() {
  // let name= "Thiru"
  // let age = 21
  // let[count, setCount] = useState(0)
  // let increment = () => {
  //   setCount (count += 1)
  // }
  // useEffect (() => {
  //   console.log("You Clicked!")
  // })

  // let decrement = () => {
  //   setCount(count -= 1)
  // }

  // let reset = () => {
  //   setCount(count = 0)
  // }
  // return (
  //   <>
      // <h1>count {count}</h1>
      // <button onClick = {increment}>Increment</button>
      {/* <button onClick = {decrement}>Decrement</button>
      <button onClick = {reset}>Reset</button> */}
      {/* <Newgreet name={name}/>
      <Greeting fname={name} fage = {age}/>
      <About />
      <Contact />
      <Button /> */}

    {/* </>
  );
}

export default App */}

import Buttonupdate from './Buttonupdate'
// React Routers
// import Home from "./Component/Home";
// import {Routes, Route} from 'react-router-dom';
// import About from './Component/About';
// import Contact from './Component/Contact';
// import Navbar from "./Component/Navbar";

// export default function App() {
//   return (
//     <div>
//       <h1>Hello!</h1>
//       <Navbar/>
//       <Routes>
//             <Route path = "/home" element = {<Home/>}></Route>
//             <Route path = "/about" element = {<About/>}></Route>
//             <Route path = "/contact" element = {<Contact/>}></Route>
//       </Routes>
//     </div>
//   )
// }

import Userinfo from './userInfo'

export default function App() {
  return (
    <div>
      <h1>Redux learn</h1>
      <Userinfo/>
      <Buttonupdate />
    </div>
  )
}
