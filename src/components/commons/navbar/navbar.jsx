import { useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import LogoSuperior from '../../../assets/images/logo-superior.svg'
import IconMenu from '../../../assets/images/icon-menu.svg'
import IconClose from '../../../assets/images/icon-close.svg'
import Button from '../button/button'
import './navbar.css'

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const checkboxRef = useRef(null);

    const closeMenu = () => {
        if (checkboxRef.current) {
            checkboxRef.current.checked = false;
        }
    };

    return (
        <nav>
            <div className="container navbar__content">
                {isHomePage ? (
                    <a href="#inicio" onClick={closeMenu}>
                        <img src={LogoSuperior} alt="Logo Superior" />
                    </a>
                ) : (
                    <Link to="/" onClick={closeMenu}>
                        <img src={LogoSuperior} alt="Logo Superior" />
                    </Link>
                )}

                <input type="checkbox" id="check" ref={checkboxRef} />
                <label htmlFor="check" className="navbar__content-checkbtn">
                    <img src={IconMenu} alt="Menu" className='open-menu' />
                    <img src={IconClose} alt="Close" className='close-menu' />
                </label>

                <div className="navbar__content-menu">
                    <div className="navbar__content-menu-dropdown">
                        <div className="navbar__content-menu-dropdown-item">
                            {isHomePage ? (
                                <a href="#inicio-servicios" onClick={closeMenu}>Servicios
                            <svg viewBox="0 0 21 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5 2L3.5 17L18.5 32" strokeWidth="4" strokeLinecap="round" />
                            </svg></a>
                            ) : (
                                <Link to="/#inicio-servicios" onClick={closeMenu}>Servicios
                            <svg viewBox="0 0 21 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5 2L3.5 17L18.5 32" strokeWidth="4" strokeLinecap="round" />
                            </svg></Link>
                            )}
                        </div>
                        <div className="navbar__content-menu-dropdown-content">
                            <Link to="/servicios/movimiento-de-tierra" onClick={closeMenu}>Movimiento de tierra</Link>
                            <Link to="/servicios/agregados" onClick={closeMenu}>Agregados</Link>
                            <Link to="/servicios/concretos" onClick={closeMenu}>Concretos</Link>
                            <Link to="/servicios/excavaciones-profundas" onClick={closeMenu}>Excavaciones profundas</Link>
                            <Link to="/servicios/certificado-rcd" onClick={closeMenu}>Certificado RCD</Link>
                            <Link to="/servicios/alquiler-de-maquinaria-amarilla" onClick={closeMenu}>Alquiler de maquinaria amarilla</Link>
                        </div>
                    </div>

                    {isHomePage ? (
                        <a href="#inicio-sobre-nosotros" onClick={closeMenu}>Sobre Nosotros</a>
                    ) : (
                        <Link to="/sobre-nosotros" onClick={closeMenu}>Sobre Nosotros</Link>
                    )}

                    <Link to="/contacto" onClick={closeMenu}>
                        <Button className={'button__primary'} text={'Contacto'} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;