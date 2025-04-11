import SectionTemplate from '../../commons/section-template/section-template'
import BackgroundIMG from '../../../assets/images/servicio-excavaciones-profundas-header.jpg'
import DeepExcavation from '../../../assets/images/servicio-excavaciones-profundas-featured.jpg'
import ImageGallery1 from '../../../assets/images/servicio-excavaciones-profundas-gallery-1.jpg'
import ImageGallery2 from '../../../assets/images/servicio-excavaciones-profundas-gallery-2.jpg'
import ImageGallery3 from '../../../assets/images/servicio-excavaciones-profundas-header.jpg'
import ImageRibbon from '../../commons/image-ribbon/image-ribbon'
import HomeServices from '../../home/home-services/home-services'
import IsoLogo from '../../commons/iso-logo/iso-logo'
import './service-deep-excavation.css'

const ServiceDeepExcavation = () => {
    const images = [
        ImageGallery1,
        ImageGallery2,
        ImageGallery3,
    ]
        
    return (
        <>
            <SectionTemplate className='service-deep-excavation' text='Excavaciones profundas' BackgroundIMG={BackgroundIMG} >
                <div className="section-template__content-text">
                    <h2>Realizamos excavaciones profundas para obras que requieren una intervención en niveles inferiores del terreno, como sótanos, estructuras subterráneas, cimentaciones especiales o sistemas de contención.</h2>
                    <p>Contamos con maquinaria pesada, personal capacitado y experiencia en la ejecución de cortes, estabilización de taludes, control de agua subterránea y manejo de materiales excavados. Evaluamos previamente las condiciones del terreno para definir el mejor método constructivo, garantizando estabilidad y continuidad operativa.</p>
                    <IsoLogo />
                </div>
                <img src={DeepExcavation} alt="Excavaciones profundas" />
            </SectionTemplate>
            <ImageRibbon columns={3} images={images} />
            <HomeServices className='title__section-content' text='Otros Servicios' visibleServices={['movimiento-de-tierra', 'agregados', 'concretos', 'certificado-rcd', 'alquiler-de-maquinaria-amarilla']} />
        </>
    )
}

export default ServiceDeepExcavation