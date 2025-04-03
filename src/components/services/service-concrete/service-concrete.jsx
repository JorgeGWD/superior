import SectionTemplate from '../../commons/section-template/section-template'
import ConcreteIMG from '../../../assets/images/servicio-concreto-featured.jpg'
import BackgroundIMG from '../../../assets/images/servicio-concreto-header.jpg'
import ImageGallery1 from '../../../assets/images/servicio-concreto-header.jpg'
import ImageGallery2 from '../../../assets/images/servicio-concreto-featured.jpg'
import ImageGallery3 from '../../../assets/images/servicio-concreto-gallery.jpg'
import ImageRibbon from '../../commons/image-ribbon/image-ribbon'
import './service-concrete.css'

const ServiceConcrete = () => {
    const images = [
        ImageGallery1,
        ImageGallery2,
        ImageGallery3,
    ]

    return (
        <>
            <SectionTemplate className='service-concrete' text='Concretos' BackgroundIMG={BackgroundIMG} >
                <div className="section-template__content-text service-concrete__content-tex">
                    <h2>En GRUPO MINERO SUPERIOR producimos concretos de la más alta calidad.</h2>
                    <p>Contamos con personal técnico y especializado para poder ofrecer un producto que cumpla con las características idóneas como son:
                    </p>
                    <ul>
                        <li>Resistencia del concreto</li>
                        <li>Asentamiento</li>
                        <li>Uso requerido</li>
                        <li>Volumen</li>
                        <li>Durabilidad</li>
                        <li>Trabajabilidad</li>
                    </ul>
                </div>
                <img src={ConcreteIMG} alt="Concretos" />
            </SectionTemplate>
            <ImageRibbon columns={3} images={images} />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default ServiceConcrete