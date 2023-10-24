import { ImHeart } from 'react-icons/im'
import { motion } from 'framer-motion'
import '../css/hero.css'
import Navbar from './Navbar'

// assets 
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import calories from '../assets/calories.png'


const Hero: React.FC = () => {

    return (
        <div className="hero">

            <div className="hero-left">
                <Navbar />
                <div className='hero-best'>
                    <span>The best fitness club in Ashgabat!</span>
                    <motion.div 
                        initial={{left: '300px'}} 
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
                <button>Join Now</button>

                <motion.div className='right-rate' initial={{ right: '1rem'}} whileInView={{right: '4rem'}} transition={{ duration: 1, type: 'tween'}}>
                    <ImHeart color={'crimson'} size={35}/>
                    <span className='rate-gray'>Heart Rate</span><span>130 bpm</span>
                </motion.div>

                <img src={hero_image} alt="Hero" className='hero-image' />
                <motion.img 
                    transition={{duration: 3, type: 'spring'}}
                    whileInView={{ right: '32rem'}}
                    initial={{ right: '11rem'}}
                    src={hero_image_back} 
                    alt='hero-background' 
                    className='hero-image-back'
                />

                <motion.div 
                    className='calories' 
                    initial={{right: '20rem'}} 
                    whileInView={{right: '45rem'}} 
                    transition={{duration: 3, type: 'spring'}}
                    >
                    <img src={calories} alt="calories" className='calories-image'/>
                    <div>
                        <p className='rate-gray'>Calories burned</p>
                        <span>220 kcal</span>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}


export default Hero