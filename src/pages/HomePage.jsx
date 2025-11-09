import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>   
        <Navbar/>
        <Header/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Services/>
        <Contacts/>
        <Footer/>
    </>
  )
}
