import SectionTemplate from '../../commons/section-template/section-template'
import AddedIMG from '../../../assets/images/servicio-agregados-featured.jpg'
import BackgroundIMG from '../../../assets/images/servicio-agregados-header.jpg'
import ImageGallery1 from '../../../assets/images/servicio-agregados-gallery-1.jpg'
import ImageGallery2 from '../../../assets/images/servicio-agregados-gallery-2.jpg'
import ImageGallery3 from '../../../assets/images/servicio-agregados-gallery-3.jpg'
import ImageRibbon from '../../commons/image-ribbon/image-ribbon'
import HomeServices from '../../home/home-services/home-services'
import './service-added.css'

const ServiceAdded = () => {
    const images = [
        ImageGallery1,
        ImageGallery2,
        ImageGallery3,
    ]

    return (
        <>
            <SectionTemplate className='service-added' text='Agregados' BackgroundIMG={BackgroundIMG}>
                <div className="section-template__content-text service-added__content-text">
                    <h2>Somos una compañía con más de 10 años de experiencia, altamente especializada en la PRODUCCIÓN Y COMERCIALIZACIÓN DE AGREGADOS.</h2>
                    <p>Contamos con la infraestructura técnica y el personal especializado para brindar el servicio y asesoría requerida, con el fin de generar la correcta selección de nuestros productos e implementar soluciones eficaces para sus necesidades.</p>
                </div>
                <img src={AddedIMG} alt="Agregados" />
            </SectionTemplate>
            <ImageRibbon columns={3} images={images} />
            <HomeServices text='Otros Servicios' visibleServices={['movimiento-de-tierra', 'concretos', 'excavaciones-profundas', 'certificado-rcd', 'alquiler-de-maquinaria-amarilla']} />
        </>
    )
}

export default ServiceAdded