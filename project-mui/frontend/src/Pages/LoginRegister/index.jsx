import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector}from 'react-redux'
export default function LoginRegister() {
  const {token}=useSelector(state=>state.auth)
  const navigate=useNavigate()
  useEffect(()=>{
if(token){
navigate(-1)
}
  },[token])
  return (
    <div>LoginRegister</div>
  )
}
