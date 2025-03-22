import LogoSuperior from '../../../assets/images/logo-superior.svg'
import Facebook from '../../../assets/images/social-facebook.svg'
import Instagram from '../../../assets/images/social-instagram.svg'
import Youtube from '../../../assets/images/social-youtube.svg'
import LinkedIn from '../../../assets/images/social-linkedin.svg'
import Pin from '../../../assets/images/icon-pin.svg'
import Email from '../../../assets/images/icon-email.svg'
import Phone from '../../../assets/images/icon-phone.svg'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container footer__content">
                <img src={LogoSuperior} alt="Logo Superior" className='logo-superior' />
                <div className="footer__content-socials">
                    <h2>Siguenos:</h2>
                    <a href="https://www.linkedin.com/" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a>
                    <a href="https://www.youtube.com/" target="_blank"><img src={Youtube} alt="Youtube" /></a>
                    <a href="https://www.facebook.com/" target="_blank"><img src={Facebook} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
                </div>
                <div className="footer__content-locations">
                    <h2>Localización:</h2>
                    <div className="footer__content-item">
                        <img src={Pin} alt="Pin" />
                        <div className="footer__content-location-office">
                            <h3>Oficinas administrativas:</h3>
                            <p>Calle 110 43-448 AV Circunvalar Barranquilla.</p>
                        </div>
                    </div>
                    <div className="footer__content-item">
                        <img src={Pin} alt="Pin" />
                        <div className="footer__content-location-floor">
                            <h3>Plantas:</h3>
                            <p>Kilometro 7 vía Puerto Colombia-Atlántico.</p>
                        </div>
                    </div>
                </div>
                <div className="footer__content-contac">
                    <h2>Contactos:</h2>
                    <div className="footer__content-item">
                        <img src={Email} alt="Email" />
                        <p>info@grupominerosuperior.com</p>
                    </div>
                    <div className="footer__content-item">
                        <img src={Phone} alt="Phone" />
                        <p>3159272862</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer