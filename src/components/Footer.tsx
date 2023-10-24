import '../css/footer.css'
import { BsGithub } from 'react-icons/bs'
 

const Footer: React.FC = () => {


    return (
        <div className='footer'>
            <div className='footer-text'>
                <p>Selim Kerimov</p>
                <p>Asghabat 2023</p>
                <p>
                    <BsGithub size={23} className='footer-icon'/>
                    <a target='_blank' href='https://github.com/selim-kerimow/react-gym.git'>Go To Repository</a>
                </p>               
            </div>

        </div>
    )
}


export default Footer