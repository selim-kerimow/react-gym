import '../css/plansElement.css'
import tick from '../assets/tick.png'
import { Plans } from './Plans'
import { Link } from 'react-scroll'

interface PlanElementProps {
    item: Plans
}


const PlanElement: React.FC<PlanElementProps> = ({ item }) => {


    return (
        <div className={`planElement ${ item.premium ? 'premium' : ''}`}>
            {item.icon}
            <h3>{item.title}</h3>
            <h1 className='plan-price'>$ {item.price}</h1>

            <ul className='plans-list'>
                { item.description?.map(li => 
                    <li>
                        <img className='plans-tick' src={tick} alt="tick" />
                        <p>{li}</p>
                    </li>                    
                    )}
            </ul>

            <Link to='join' span={true} smooth={true}>
                <button className='plans-button'>Join now</button>
            </Link>
        </div>
    )
}

export default PlanElement