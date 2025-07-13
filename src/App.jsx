import { useState } from 'react'
import bhbcLogo from './assets/logo_white.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.instagram.com/bhbcglobal/" target="_blank">
          <img src={bhbcLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://web.facebook.com/BHBCGlobal" target="_blank">
          <img src={bhbcLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>BHBC MEDIA</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on Each logo to learn more
      </p>
    </>
  )
}

export default App
