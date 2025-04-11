import './navbar.css'
import LogoSuperior from '../../../assets/images/logo-superior.svg'
import IconMenu from '../../../assets/images/icon-menu.svg'
import IconClose from '../../../assets/images/icon-close.svg'
import Button from '../button/button'
import { useLocation, Link } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/'

    return (
        <nav>
            <div className="container navbar__content">
                <Link to={isHomePage ? "#inicio" : "/"}><img src={LogoSuperior} alt="Logo Superior" /></Link>

                <input type="checkbox" id="check" />
                <label htmlFor="check" className="navbar__content-checkbtn">
                    <img src={IconMenu} alt="Menu" className='open-menu' />
                    <img src={IconClose} alt="Close" className='close-menu' />
                </label>

                <div className="navbar__content-menu">
                    <div className="navbar__content-menu-dropdown">
                        <div className="navbar__content-menu-dropdown-item">
                            {isHomePage ? (
                                <a href="#inicio-servicios">Servicios</a>
                                ) : (
                                <Link onClick={(e) => e.preventDefault()}>Servicios</Link>
                            )}
                            <svg viewBox="0 0 21 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 2L3.5 17L18.5 32" strokeWidth="4" strokeLinecap="round"/></svg>
                        </div>
                        <div className="navbar__content-menu-dropdown-content">
                            <Link to="/servicios/movimiento-de-tierra">Movimiento de tierra</Link>
                            <Link to="/servicios/agregados">Agregados</Link>
                            <Link to="/servicios/concretos">Concretos</Link>
                            <Link to="/servicios/excavaciones-profundas">Excavaciones profundas</Link>
                            <Link to="/servicios/certificado-rcd">Certificado RCD</Link>
                            <Link to="/servicios/alquiler-de-maquinaria-amarilla">Alquiler de maquinaria amarilla</Link>
                        </div>
                    </div>

                    {isHomePage ? (
                        <a href="#inicio-sobre-nosotros">Sobre Nosotros</a>
                    ) : (
                        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
                    )}

                    {/* <a href={isHomePage ? "#inicio-proyectos" : "/proyectos"}>Proyectos</a> */}
                    {/* <a href={isHomePage ? "#inicio-nuestras-plantas" : "/nuestras-plantas"}>Nuestras Plantas</a> */}

                    <Link to="/contacto">
                        <Button className={'button__primary'} text={'Contacto'} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar