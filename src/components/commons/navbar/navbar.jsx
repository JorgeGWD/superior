import './navbar.css'
import LogoSuperior from '../../../assets/images/logo-superior.svg'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar__content">
                <img src={LogoSuperior} alt="Logo Superior" />
            </div>
        </nav>
    )
}

export default Navbar