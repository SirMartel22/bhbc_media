import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './Pages/Form'
import MainPage from './Pages/MainPage'
// import MainPage from './Pages/MainPage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/Pages/MainPage" element= {<MainPage/>} />
          <Route path="/Pages/Form" element={ <Form />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
    </div>
  )
}

export default App