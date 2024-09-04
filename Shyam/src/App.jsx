import { useState } from 'react'
import Profile from './components/Profile'
import Nav from './components/Nav'
import Skills from './components/Skills'
import Spin from './components/Spin'
import ProfileCard from './components/ProfileCard'
import ProjectCard from './components/ProjectCard'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experience from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <Nav />
    <Spin />
    <Profile />
    <ProfileCard />
    <Skills />
    <Projects />
    <Experience />
    <Footer />
    </>
  )
}

export default App
