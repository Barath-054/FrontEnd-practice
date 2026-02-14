
import { useState } from 'react';

export default function App() {
   //let name = "Thiru";
   let [name, setName] = useState("thiru")
   let update = () => {
    setName("Barath");
   }
    return (
        <div>
          <h1>Hello, {name}.</h1>
          <button onClick={update}>Click me!</button>
        </div>
    )
}
