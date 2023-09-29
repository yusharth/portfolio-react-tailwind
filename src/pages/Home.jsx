import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Tweets from '../components/Tweets'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
const Home = () => {
  return (
    <div className='h-screen bg-[#F7F4F1]'>
        <Navbar />
        <Hero />
        <Timeline />
        <Projects />
        <Tweets />
        <Footer />
    </div>
  )
}

export default Home