import './navbar.css'
import LogoSuperior from '../../../assets/images/logo-superior.svg'
import Button from '../button/button'

const Navbar = () => {
    return (
        <nav>
            <div className="container navbar__content">
                <a href='#home'><img src={LogoSuperior} alt="Logo Superior" /></a>
                <div className="navbar__content-menu">
                    <a href="#services">Servicios</a>
                    <a href="#about">Sobre Nosotros</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#our-facilities">Nuestras Plantas</a>
                    <Button className={'button__primary'} text={'Contacto'} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar