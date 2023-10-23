
// components
import Hero from "./components/Hero"
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
    </div>
    
  )
}

export default App
