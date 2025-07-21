import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './Pages/Form'
// import MainPage from './Pages/MainPage'
import MainPage from './Pages/MainPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Pages/MainPage" element= {<MainPage/>} />
        <Route path="/Pages/Form" element={ <Form />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
  )
}

export default App