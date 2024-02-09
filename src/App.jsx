import React from 'react'

//materials
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router className="container-fluid">
      <Navbar/>

      <Routes>
          <Route exact path= "/" element={<Profile/>}/>
          <Route exact path= "/Projects" element={<Projects/>}/>
          <Route exact path= "/Contact" element={<Contact/>}/>
      </Routes>

      <Footer/>

    </Router>
  )
}

export default App

