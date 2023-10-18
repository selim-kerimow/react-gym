import { ImHeart } from 'react-icons/im'

// css
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
                    <div></div>
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
                <div className='right-rate'>
                    <ImHeart color={'crimson'} size={35}/>
                    <span className='rate-gray'>Heart Rate</span><span>130 bpm</span>
                </div>
                <img src={hero_image} alt="Hero" className='hero-image' />
                <img src={hero_image_back} alt='hero-background' className='hero-image-back'/>
                <div className='calories'>
                    <img src={calories} alt="calories" className='calories-image'/>
                    <div>
                        <p className='rate-gray'>Calories burned</p>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero