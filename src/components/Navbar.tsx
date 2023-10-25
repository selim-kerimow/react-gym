import { useState } from 'react'
import '../css/navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-scroll'


const Navbar: React.FC = () => {

    const [hamburger, setHamburger] = useState<boolean>(false)

    return (
        <div className='navbar'>
            <h1>Fitness Club</h1>

            <div className='navbar-hamburger' onClick={() => setHamburger(true)}>
                <GiHamburgerMenu color='white' size={32}/>
            </div>

            <nav className={`navbar-nav ${ hamburger ? 'show' : ''}`} >
                <li>
                    <Link to='home' span={true} smooth={true} onClick={() => setHamburger(false)}> Home </Link>
                </li>
                <li>
                    <Link to='programs' span={true} smooth={true} onClick={() => setHamburger(false)}>Programs </Link>
                </li>
                <li>
                    <Link to='why-us' span={true} smooth={true} onClick={() => setHamburger(false)}>Why Us </Link>
                </li>
                <li>
                    <Link to='plans' span={true} smooth={true} onClick={() => setHamburger(false)}>Plans </Link>
                </li>
                <li>
                    <Link to='testimonials' span={true} smooth={true} onClick={() => setHamburger(false)}>Testimonials </Link>
                </li>
            </nav>
        </div>
    )
}

export default Navbar