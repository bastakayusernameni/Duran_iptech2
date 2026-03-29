import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Home.tsx'
import About from './About.tsx'
import Nav from './Nav.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    < Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/about" element = {<About/>} />
    </Routes>
    </>
      
  )
}

export default App
