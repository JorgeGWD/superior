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
                <a href={isHomePage ? "#inicio" : "/"}><img src={LogoSuperior} alt="Logo Superior" /></a>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="navbar__content-checkbtn">
                    <img src={IconMenu} alt="Menu" className='open-menu' />
                    <img src={IconClose} alt="Close" className='close-menu' />
                </label>
                <div className="navbar__content-menu">
                    <div className="navbar__content-menu-dropdown">
                        <a href={isHomePage ? "#inicio-servicios" : ""}>Servicios</a>
                        <div className="navbar__content-menu-dropdown-content">
                            <a href="/servicios/movimiento-de-tierra">Movimiento de tierra</a>
                            <a href="/servicios/agregados">Agregados</a>
                            <a href="/servicios/concretos">Concretos</a>
                            <a href="/servicios/excavaciones-profundas">Excavaciones profundas</a>
                            <a href="/servicios/certificado-rcd">Certificado RCD</a>
                            <a href="/servicios/alquiler-de-maquinaria-amarilla">Alquiler de maquinaria  amarilla</a>
                        </div>
                    </div>
                    <a href={isHomePage ? "#inicio-sobre-nosotros" : "/sobre-nosotros"}>Sobre Nosotros</a>
                    <a href={isHomePage ? "#inicio-proyectos" : "/proyectos"}>Proyectos</a>
                    <a href={isHomePage ? "#inicio-nuestras-plantas" : "/nuestras-plantas"}>Nuestras Plantas</a>
                    <Link to={'/contacto'}><Button className={'button__primary'} text={'Contacto'} /></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar