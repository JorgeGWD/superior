import SectionTemplate from '../../commons/section-template/section-template'
import BackgroundIMG from '../../../assets/images/servicio-alquiler-de-equipos-header.jpg'
import YellowMachineRentalIMG from '../../../assets/images/servicio-alquiler-de-equipos-featured.jpg'
import ImageGallery1 from '../../../assets/images/servicio-alquiler-de-equipos-gellery-1.jpg'
import ImageGallery2 from '../../../assets/images/servicio-alquiler-de-equipos-gellery-2.jpg'
import ImageGallery3 from '../../../assets/images/servicio-alquiler-de-equipos-gellery-3.jpg'
import ImageRibbon from '../../commons/image-ribbon/image-ribbon'
import HomeServices from '../../home/home-services/home-services'
import IsoLogo from '../../commons/iso-logo/iso-logo'
import './service-yellow-machine-rental.css'

const ServiceYellowMachineRental = () => {
    const images = [
        ImageGallery1,
        ImageGallery2,
        ImageGallery3,
    ]

    return (
        <>
            <SectionTemplate className='service-yellow-machine-rental' text='Alquiler de maquinaria amarilla' BackgroundIMG={BackgroundIMG}>
                <div className="section-template__content-text service-yellow-machine-rental__content-text">
                    <h2>Ofrecemos maquinaria amarilla y equipos para diferentes actividades de la construcción.</h2>
                    <p>Somos un aliado para el suministro de equipos para grandes proyectos que garantizan su confiabilidad.</p>
                    <ul>
                        <li>Retro Excavadoras</li>
                        <li>Bulldozers</li>
                        <li>Motoniveladoras</li>
                        <li>Minicargadores</li>
                        <li>Vibrocompatadores</li>
                        <li>Camion cisterna</li>
                        <li>Retrocargadores</li>
                        <li>Piloteadoras</li>
                        <li>Gruas</li>
                    </ul>
                    <IsoLogo />
                </div>
                <img src={YellowMachineRentalIMG} alt="Agregados" />
            </SectionTemplate>
            <ImageRibbon columns={3} images={images} />
            <HomeServices className='title__section-content' text='Otros Servicios' visibleServices={['movimiento-de-tierra', 'agregados', 'concretos', 'excavaciones-profundas', 'certificado-rcd']} />
        </>
    )
}

export default ServiceYellowMachineRental