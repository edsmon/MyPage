
import React, { useEffect, useState } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import '../../App.css';

const Navbar = () => {
    const [scrollLogo, setScrollLogo] = useState(true);

    const changeLogo = () => {

        if (window.scrollY >= 200) {
            setScrollLogo(false)

        } else if (window.scrollY <= 200) {
            setScrollLogo(true)
        }
    }
    useEffect(() => {
        changeLogo()

        window.addEventListener('scroll', changeLogo)

    }, [])

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img className={scrollLogo ? "logo" : "logoScrolled"} alt="edsmon" />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/contact">Contacto</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;

