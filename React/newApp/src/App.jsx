import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)
  let Add =()=> {
    setCount(count += 1);
  }
  let Del =()=> {
    setCount(count -= 1);
  }
  let Reset=()=> {
    count = 0;
    setCount(count);
  }

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={Add}>count +</button>
      <button onClick={Del}>count -</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App
