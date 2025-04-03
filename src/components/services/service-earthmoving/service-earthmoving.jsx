import SectionTemplate from '../../commons/section-template/section-template'
import BackgroundIMG from '../../../assets/images/servicio-movimiento-de-tierra-header.jpg'
import EarthMovingIMG from '../../../assets/images/servicio-movimiento-de-tierra-featured.jpg'
import ImageGallery1 from '../../../assets/images/servicio-movimiento-de-tierra-gallery-1.png'
import ImageGallery2 from '../../../assets/images/servicio-movimiento-de-tierra-gallery-2.jpg'
import ImageGallery3 from '../../../assets/images/servicio-movimiento-de-tierra-gallery-3.jpg'
import './service-earthmoving.css'
import ImageRibbon from '../../commons/image-ribbon/image-ribbon'

const ServiceEarthmoving = () => {
    const images = [
        ImageGallery1,
        ImageGallery2,
        ImageGallery3,
    ]

    return (
        <>
            <SectionTemplate className='service-earthmoving' text='Movimiento de tierra' BackgroundIMG={BackgroundIMG} >
                <div className="section-template__content-text service-earthmoving__content-text">
                    <h2>Somos especialistas en la ejecución de movimientos de tierra, excavaciones masivas, y obras complementarias.</h2>
                    <p>A la hora de planificar una construcción y antes de empezar cualquier tipo de obra, es necesario realizar una serie de trabajos para preparar el terreno lo cual nos permite empezar a realizar la cimentación y posterior edificación, contamos con una amplia experiencia desarrollando proyectos para diferentes empresas industriales de la región</p>
                </div>
                <img src={EarthMovingIMG} alt="Movimiento de tierra" />
            </SectionTemplate>
            <ImageRibbon columns={3} images={images} />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default ServiceEarthmoving