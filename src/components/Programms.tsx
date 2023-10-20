import '../css/programs.css'
import ProgramElement from './ProgramElement'

// react-icons
import { PiBarbellBold } from 'react-icons/pi'
import { FaRunning } from 'react-icons/fa'
import { AiTwotoneFire } from 'react-icons/ai'
import { BsFillHeartPulseFill } from 'react-icons/bs'

// element interface
export interface IProgram {
    icon: any,
    title: string,
    text: string,
}

// elements data
const programs: IProgram[] = [
    {icon: <PiBarbellBold size={45} className='element-icon'/>, title: 'Strength Training', text: 'In this program, you are trained to improve your strength through many exercises.'},
    {icon: <FaRunning size={45} className='element-icon'/>, title: 'Cardio Training', text: 'In this program, you are trained to do sequential moves in range of 20 to 30 minutes.'},
    {icon: <AiTwotoneFire size={45} className='element-icon'/>, title: 'Fat Burning', text: 'This program is suitable for you who wants to get tid of yout fat and lose their weight.'},
    {icon: <BsFillHeartPulseFill size={40} className='element-icon'/>, title: 'Health Fitness ', text: 'This programs id designed for those who exersises only for their body fitness not body building.'},
]

const Programs: React.FC = () =>  {


    return (
        <div className="programs">
            <div className="programs-header">
                <span className="stroke-text">EXPLORE OUR</span> <span>PROGRAMS</span> <span className="stroke-text">TO SHAPE YOU</span>
            </div>
            <div className='program-element'>
                { programs?.map(item => 
                    <ProgramElement element={item}/>
                    )}
            </div>
        </div>
    )
}

export default Programs