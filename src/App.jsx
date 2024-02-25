import { Outlet } from 'react-router-dom'
import './App.css'
import About from './component/About'
import Banner from './component/Banner'
import Navbar from './component/Navbar'
import Skill from './component/Skill'
import Footer from './component/Footer'

function App() {

  return (
    <>
    
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Footer></Footer>
 

    </>
  )
}

export default App
