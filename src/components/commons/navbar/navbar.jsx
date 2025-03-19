import './navbar.css'
import LogoSuperior from '../../../assets/images/logo-superior.svg'
import Button from '../button/button'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar__content">
                <a href='#home'><img src={LogoSuperior} alt="Logo Superior" /></a>
                <div className="navbar__content-menu">
                    <a href="#services">Servicios</a>
                    <a href="#about">Sobre Nosotros</a>
                    <a href="#about">Nuestras Plantas</a>
                    <Button className={'button__primary'} text={'Contacto'} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar