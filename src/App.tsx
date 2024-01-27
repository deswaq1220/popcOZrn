import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SocialLoginPage from './Pages/SocialLoginPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>라우팅자리</p>
      <Routes>
        <Route path='social-login' element={<SocialLoginPage />} />
      </Routes>
    </>
  )
}

export default App
