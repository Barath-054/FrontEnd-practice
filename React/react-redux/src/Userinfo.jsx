import { useSelector } from 'react-redux'



const Userinfo = () => {
    const data = useSelector((state) => state.user)
  return (
    <div>
      <h1>{data.username} , {data.balance}</h1>
    </div>
  )
}

export default Userinfo;
