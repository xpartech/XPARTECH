import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Button Component/Button';
import './Navbar.css';
import Images from '../../../assets/images/xpartech2.png';

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      navigate("/contact");
    }

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container' >
            <Link to="/" className='navbar-logo'>
            <img src={Images} alt=''/>
            </Link>
            
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
               
            </ul>
            {button && <Button buttonStyle='btn--outline'
            onclick={routeChange}>Contact</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
