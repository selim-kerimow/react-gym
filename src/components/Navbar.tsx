
// css
import '../css/navbar.css'


const Navbar: React.FC = () => {



    return (
        <div className='navbar'>
            <h1>Fitness Club</h1>
            <nav className='navbar-nav'>
                <li>Home</li>
                <li>Programms</li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </nav>
        </div>
    )
}

export default Navbar