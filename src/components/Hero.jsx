import React from 'react'
import Home from '../pages/home'
import { motion } from 'framer-motion'
import ProfileImage from '../assets/ProfileImage.jpeg'
const Hero = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.9, ease: 'easeInOut'}}
    viewport={{once: true}}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] '
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between '>

        {/* Left Side Content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 
            className='text-4xl md:text-6xl font-bold mb-4'
          >
            Hi, I'm <span className='text-purple'> Hatif Shaikh </span>
          </h1>
          <h2 
            className='text-2xl md:text-4xl font-semibold mb-6 typewriter'
          >
            Full Stack Developer 
          </h2>
          <p 
            className='text-lg text-gray-300 mb-6'
          >
            I create stunning web   experiences with modern technologies and innovative design.
          </p>

          <div className='flex space-x-4'>
            <a 
              className='px-6 py-3 bg-purple rounded-lg font-medium transition duration-300 hover:bg-purple-700 ' 
              href="#projects"
            >
              View Works
            </a>
            <a
              className='px-6 py-3 border border-purple rounded-lg font-medium decoration-purple-300 hover:bg-purple/20 transition ' 
              href="#contact">
                Contact Me
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className='md:w-1/2 flex justify-center items-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink-300 opacity-70'>
              <motion.img
               animate={{y:[0, -20, 0]}}
               transition={{
                repeat:Infinity,
                duration: 4,
                repeatType: "loop",
                ease: "easeInOut"
               }}
               className='relative w-64 h-64 rounded-full md:w-80 md:h-80 object-cover z-10 '
               src={ProfileImage} alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
