import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './pages/Form'
import MainPage from './pages/MainPage'
import History from './Pages/History'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/Pages/MainPage" element= {<MainPage/>} />
          <Route path="/Pages/Form" element={<Form />} />
          <Route path="/Pages/History" element={<History />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
    </div>
  )
}

export default App