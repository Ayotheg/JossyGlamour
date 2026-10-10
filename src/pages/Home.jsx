import Seo from '../components/Seo.jsx'
import About from '../components/home/About.jsx'
import BookingCta from '../components/home/BookingCta.jsx'
import Gallery from '../components/home/Gallery.jsx'
import Hero from '../components/home/Hero.jsx'
import PersonalStyling from '../components/home/PersonalStyling.jsx'
import Services from '../components/home/Services.jsx'

function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <Services />
      <PersonalStyling />
      <About />
      <Gallery />
      <BookingCta />
    </>
  )
}

export default Home
