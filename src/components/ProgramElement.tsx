
import { FiArrowRight } from 'react-icons/fi'
import '../css/programElement.css'
import { IProgram } from './Programms'

interface ProgramElementProps {
    element: IProgram
}

const ProgramElement: React.FC<ProgramElementProps> = ({ element }) => {



    return (
        <div className="element">
            {element.icon}
            <h1>{element.title}</h1>
            <p>{element.text}</p>
            <div className="join-now">
                <p>Join Now</p>
                <FiArrowRight color='white' size={35}/>
            </div>
        </div>
    )
} 

export default ProgramElement