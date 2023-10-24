
// components
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Join from "./components/Join"
import Plans from "./components/Plans"
import Programs from "./components/Programms"
import Testimonials from "./components/Testimonials"
import WhyUs from "./components/WhyUs"


const  App: React.FC = () => {

  return (
    <div className="app">
      <Hero />
      <Programs />
      <WhyUs />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
    
  )
}

export default App
