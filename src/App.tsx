import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Home.tsx'
import About from './About.tsx'
import Product from './Product.tsx'
import Contact from './Contact.tsx'
import Nav from './Nav.tsx'

function App() {

  return (
    <>
    <Nav/>
    < Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/about" element = {<About/>} />
      <Route path = "/product" element = {<Product/>} />
      <Route path = "/contact" element = {<Contact/>} />
    </Routes>
    </>
      
  )
}

export default App
