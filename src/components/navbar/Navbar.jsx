import {useState, useRef, useEffect} from 'react'

import "./navbar.css"
import logo from './img/logo.png'

const Navbar = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const navbarRef = useRef(null);
    const navbarWrapperRef = useRef(null);


    useEffect(() => {
        if (isBurgerOpen) {
            const height = navbarRef.current.getBoundingClientRect().height;
            navbarWrapperRef.current.style.height = height + 'px';
            console.log(height);
        }
        else {
            navbarWrapperRef.current.style.height = 0 + 'px';

        }
    }, [isBurgerOpen])
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="navbar-header">
                    <div className="navbar-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="navbar-burger" onClick={() => setIsBurgerOpen(prevState => !prevState)}>
                        <span></span>
                    </div>
                </div>
                <div className="navbar-links-wrapper" ref={navbarWrapperRef}>
                    <ul className="navbar-links" ref={navbarRef}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Solution</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar