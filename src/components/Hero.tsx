import { motion } from 'framer-motion'
import '../css/hero.css'
import Navbar from './Navbar'


const Hero: React.FC = () => {

    return (
        <div className="hero" id='home'>

            <div className="hero-left">
                <Navbar />
                <div className='hero-best'>
                    <span>The best fitness club in Ashgabat!</span>
                    <motion.div 
                        initial={{left: '200px'}} 
                        whileInView={{ left: '8px'}} 
                        transition={{duration: 3, type: 'tween'}}
                    >
                    </motion.div>
                </div>
                <div className='hero-text'>
                    <div><span className='stroke-text'>SHAPE</span><span>YOUR</span></div>
                    <div><span>IDEAL</span><span>BODY</span></div>
                </div>
                <p className='hero-pargraph'>In here we will help you to shape and build your ideal body and live up your life to fullest </p>
                <div className='hero-statistic'>
                    <div>
                        <h2>+ 140</h2>
                        <p>EXPERT COACHES</p>
                    </div>
                    <div>
                        <h2>+ 978</h2>
                        <p>MEMEBERS JOINED</p>
                    </div>
                    <div>
                        <h2>+ 50</h2>
                        <p>FITNESS PROGRAMMS</p>
                    </div>
                </div>
                <div className='hero-buttons'>
                    <button className='get-started'>Get Started</button>
                    <button className='learn-more'>Learn More</button>
                </div>
            </div>


            <div className="hero-right">
                
            </div>
        </div>
    )
}


export default Hero