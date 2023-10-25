import '../css/plans.css'
import PlanElement from './PlanElement'

// react-icons
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { FaCrown } from 'react-icons/fa'
import { PiBarbellDuotone } from 'react-icons/pi'

export interface Plans {
    id: number,
    icon: any,
    title: string,
    price: number,
    description: string[],
    premium: boolean
}

const plans_data: Plans[] = [
    {
        id: 1, 
        icon: <MdOutlineHealthAndSafety color='crimson' size={35}/>, 
        title: 'BASIC PLAN', price: 25, 
        description: ['2 hours of excercises', 'Free consultation to coaches', 'Access to The Community'],
        premium: false
    },
    {
        id: 2, 
        icon: <FaCrown color='white' size={35}/>, title: 'PREMIUM PLAN', 
        price: 30, 
        description: ['5 hours of excercises', 'Free consultation to coaches', 'Access to minibar'],
        premium: true
    },
    {
        id: 3, 
        icon: <PiBarbellDuotone color='crimson' size={35}/>, 
        title: 'PRO PLAN', 
        price: 50, 
        description: ['8 hours of excercises', 'Consultation of Private Coaches', 'Access to Fitness Merchendises'],
        premium: false
    }
]


const Plans: React.FC = () => {

    return (
        <div className='plans' id='plans'>
            <h1 className='plans-header'>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </h1>
            <div className='plans-container'>
                { plans_data?.map(item => 
                    <PlanElement item={item} key={item.id}/>
                    )}                
            </div>

        </div>
    )
}


export default Plans