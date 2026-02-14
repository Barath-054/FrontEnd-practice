import Newgreet from "./Newgreet"


export default function Greeting(props) {
  let name = "Ramya"
  return (
    <div>
      <Newgreet name={name} />
      <h1 >Hello{props.fname}, How are You! YOur aGe iS {props.fage}</h1>
    </div>
  )
}
