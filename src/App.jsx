import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Footer from './components/Footer'
import Aos from 'aos';  

import 'aos/dist/aos.css';
function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <>
    <Header/>
    <Hero/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Footer/>

    </>
  )
}

export default App
