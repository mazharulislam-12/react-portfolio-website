import './App.css'
import About from './component/About'
import Banner from './component/Banner'
import Navbar from './component/Navbar'
import Skill from './component/Skill'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    
    <Outlet></Outlet>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Footer></Footer>
 

    </>
  )
}

export default App
