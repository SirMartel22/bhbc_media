import React from 'react'
import bhbcLogo from '/src/assets/logo_black.png'
import ctl from '@netlify/classnames-template-literals'
import { useNavigate } from 'react-router';


const MainPage = () => {
    const navigate = useNavigate();

     const mainDiv = ctl(`
      flex 
      flex-col 
      justify-center 
      items-center 
      pt-48 
      gap-4
    `)  
  
  const secondDiv = ctl(`
      flex 
      items-center 
      justify-center 
      gap-4
    `)

    return (
    <div>
      <div className={ mainDiv }>
        <div className = {secondDiv}>
          <a href="https://www.instagram.com/bhbcglobal/" target="_blank">
            <img src={bhbcLogo} className="logo w-16 h-16" alt="Vite logo" />
          </a>
          <a href="https://web.facebook.com/BHBCGlobal" target="_blank">
            <img src={bhbcLogo} className="logo w-16 h-16" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl text-black-600">BHBC MEDIA</h1>
        <div className="card flex flex-col items-center gap-8">
          <p className="text-2xl">
            This App is under development, Kindly check back later.
          </p>
          <button className="cursor-pointer bg-black text-white p-2 rounded-md" onClick={()=> navigate('/Form')}>
            Get Started
          </button>
        </div>
        
      </div>
      
    </div>
  )
}

export default MainPage
