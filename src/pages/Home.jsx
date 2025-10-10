import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Projects from '../components/Projects'
import Expriences from '../components/Exprience'
import Skills from '../components/Skills'



const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Expriences />
      <Contacts />
    </div>
  )
}

export default Home