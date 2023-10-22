import '../css/whyUs.css'

// assets
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import tick from '../assets/tick.png'
import adidas from '../assets/adidas.png'
import nb from '../assets/nb.png'
import nike from '../assets/nike.png'

const reasons: string[] = [
    'OVER 140+ EXPERT COACHS',
    'TRAIN SMARTER AND FASTER THAN BEFORE',
    '1 FREE PROGRAM FOR NEM MEMBERS',
    'REALIABLE PARTNERS'
]


const WhyUs: React.FC = () => {


    return (
        <div className="why">

            <div className="why-left">
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
            </div>

            <div className='why-right'>
                <p className='reasons-title'>Some reasons</p>
                <h1 className='reasons-title2'><span className='stroke-text'>Why</span> Choose Us</h1>
                <ul className='reasons-list'>
                    { reasons?.map(item => 
                        <li>
                            <img src={tick} alt='tick' />
                            {item}
                        </li>
                        )}
                </ul>

                <p className='partners-title'>Our Partners</p>
                <div className='partners'>
                    <img src={adidas} alt='adidas'/>
                    <img src={nb} alt='nb'/>
                    <img src={nike} alt='nike'/>
                </div>
            </div>
        </div>
    )
}

export default WhyUs