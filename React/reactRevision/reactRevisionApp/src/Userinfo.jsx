import React from 'react'
import { useSelector } from 'react-redux'

export default function Userinfo() {
    let data = useSelector(state => state.user)
  return (
    <div>
      <p>{data.username}, {data.balance}</p>
    </div>
  )
}