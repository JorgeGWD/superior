import SectionTemplate from '../../commons/section-template/section-template'
import BackgroundIMG from '../../../assets/images/servicio-alquiler-de-equipos-header.jpg'
import YellowMachineRentalIMG from '../../../assets/images/servicio-alquiler-de-equipos-featured.jpg'
import ImageGallery1 from '../../../assets/images/servicio-alquiler-de-equipos-gellery-1.jpg'
import ImageGallery2 from '../../../assets/images/servicio-alquiler-de-equipos-gellery-2.jpg'
import ImageGallery3 from '../../../assets/images/servicio-alquiler-de-equipos-gellery-3.jpg'
import ImageRibbon from '../../commons/image-ribbon/image-ribbon'
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
                    <h2>Service Yellow Machine Rental</h2>
                    <p>Welcome to the Yellow Machine Rental service page!</p>
                </div>
                <img src={YellowMachineRentalIMG} alt="Agregados" />
            </SectionTemplate>
            <ImageRibbon columns={3} images={images} />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default ServiceYellowMachineRental