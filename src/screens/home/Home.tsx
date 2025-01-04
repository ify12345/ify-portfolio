import * as React from 'react'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'



const Home = () => {
  return (
    <div className=''>
     <Navbar/>
     <Projects/>
     <About/>
     <Experience/>
     <Footer/>
    </div>
  )
}

export default Home
