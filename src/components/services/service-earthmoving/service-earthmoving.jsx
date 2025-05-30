import SectionTemplate from '../../commons/section-template/section-template'
import BackgroundIMG from '../../../assets/images/servicio-movimiento-de-tierra-header.jpg'
import EarthMovingIMG from '../../../assets/images/servicio-movimiento-de-tierra-featured.jpg'
import ImageGallery1 from '../../../assets/images/servicio-movimiento-de-tierra-gallery-1.png'
import ImageGallery2 from '../../../assets/images/servicio-movimiento-de-tierra-gallery-2.jpg'
import ImageGallery3 from '../../../assets/images/servicio-movimiento-de-tierra-gallery-3.jpg'
import ImageRibbon from '../../commons/image-ribbon/image-ribbon'
import HomeServices from '../../home/home-services/home-services'
import IsoLogo from '../../commons/iso-logo/iso-logo'
import './service-earthmoving.css'

const ServiceEarthmoving = () => {
    const images = [
        ImageGallery1,
        ImageGallery2,
        ImageGallery3,
    ]

    return (
        <>
            <SectionTemplate className='service-earthmoving' text='Movimiento de tierra' BackgroundIMG={BackgroundIMG} showButton={true}>
                <div className="section-template__content-text service-earthmoving__content-text">
                    <h2>Somos especialistas en la ejecución de movimientos de tierra, excavaciones masivas, y obras complementarias.</h2>
                    <p>A la hora de planificar una construcción y antes de empezar cualquier tipo de obra, es necesario realizar una serie de trabajos para preparar el terreno lo cual nos permite empezar a realizar la cimentación y posterior edificación, contamos con una amplia experiencia desarrollando proyectos para diferentes empresas industriales de la región</p>
                    <IsoLogo />
                </div>
                <img src={EarthMovingIMG} alt="Movimiento de tierra" />
            </SectionTemplate>
            <ImageRibbon columns={3} images={images} />
            <HomeServices className={'title__section-content'} text='Otros Servicios' visibleServices={['agregados', 'concretos', 'excavaciones-profundas', 'certificado-rcd', 'alquiler-de-maquinaria-amarilla']} />
        </>
    )
}

export default ServiceEarthmoving