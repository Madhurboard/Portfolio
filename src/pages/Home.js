
import Hero from "../components/Hero"
import About from "../components/About"
import Timeline from "../components/Timeline/Timeline.js"
import Techstack from "../components/TechStack"
import Resume from "../components/Resume"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import Contact from "../components/Contact"

function Home() {
  const [borderRadius, setBorderRadius] = useState(178)
  const [margin, setMargin] = useState(8)

  const windowHeight = window.innerHeight

  const listener = () => {
    const scrollFromTop = document.body.getBoundingClientRect().top

    if (scrollFromTop > 0) {
      const percentage = (1 / (windowHeight * 0.6)) * (scrollFromTop - 0.4 * windowHeight)

      setBorderRadius(percentage * 200)

      if (percentage < 0) {
        setMargin(0)
      } else {
        setMargin(percentage * 8)
      }
    } else {
      setBorderRadius(0)
      setMargin(0)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

  return (
    <>
      
      <Hero />
      <main style={{ "--border-radius": `${borderRadius}px`, "--margin": `${margin}rem` }} className="pb-20 bg-white main opacity-0 slide-up-main">
        <div className="container flex">
          <About />
          <Timeline />
        </div>
        <Techstack />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </>
  )
}

export default Home