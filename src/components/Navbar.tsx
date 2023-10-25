import { useState } from 'react'
import '../css/navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar: React.FC = () => {

    const [hamburger, setHamburger] = useState<boolean>(false)

    return (
        <div className='navbar'>
            <h1>Fitness Club</h1>

            <div className='navbar-hamburger' onClick={() => setHamburger(true)}>
                <GiHamburgerMenu color='white' size={32}/>
            </div>

            <nav className={`navbar-nav ${ hamburger ? 'show' : ''}`} >
                <li onClick={() => setHamburger(false)}>Home</li>
                <li onClick={() => setHamburger(false)}>Programms</li>
                <li onClick={() => setHamburger(false)}>Why Us</li>
                <li onClick={() => setHamburger(false)}>Plans</li>
                <li onClick={() => setHamburger(false)}>Testimonials</li>
            </nav>
        </div>
    )
}

export default Navbar