// import { useState } from 'react'

import bhbcLogo from './assets/logo_black.png'
// import './App.css'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './pages/Form'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-48 gap-4">
        <div className = "flex items-center justify-center gap-4">
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
          <button className="cursor-pointer bg-black text-white p-2 rounded-md">
            Get Started
          </button>
        </div>
        
      </div>

      <BrowserRouter>
        <Route path="./Pages/Form" element={ <Form />} />
      
      </BrowserRouter>
       <Analytics />
    </>
  )
}

export default App
