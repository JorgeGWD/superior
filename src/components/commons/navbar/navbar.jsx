import './navbar.css'
import LogoSuperior from '../../../assets/images/logo-superior.svg'
import IconMenu from '../../../assets/images/icon-menu.svg'
import IconClose from '../../../assets/images/icon-close.svg'
import Button from '../button/button'
import { useLocation , Link } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <nav>
            <div className="container navbar__content">
                <a href={isHomePage ? "#home" : "/"}><img src={LogoSuperior} alt="Logo Superior" /></a>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="navbar__content-checkbtn">
                    <img src={IconMenu} alt="Menu" className='open-menu' />
                    <img src={IconClose} alt="Close" className='close-menu' />
                </label>
                <div className="navbar__content-menu">
                    <a href={isHomePage ? "#services" : "/services"}>Servicios</a>
                    <a href={isHomePage ? "#about" : "/about"}>Sobre Nosotros</a>
                    <a href={isHomePage ? "#projects" : "/projects"}>Proyectos</a>
                    <a href={isHomePage ? "#our-facilities" : "/our-facilities"}>Nuestras Plantas</a>
                    <Link to={'/contacto'}><Button className={'button__primary'} text={'Contacto'} /></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar