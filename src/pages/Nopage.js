import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Nopage = () => {
    const navigate = useNavigate()

    useEffect(() => {
      setTimeout(()=>{
        navigate("/")
      },1000)
    }, [])
    
  return (
    <div>Page not found</div>
  )
}
