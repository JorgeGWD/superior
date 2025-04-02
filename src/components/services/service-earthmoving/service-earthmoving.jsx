import SectionTemplate from '../../commons/section-template/section-template'
import BackgroundIMG from '../../../assets/images/movimiento-de-tierra.jpg'
import EarthMovingIMG from '../../../assets/images/servicio-movimiento-de-tierra.jpg'
import './service-earthmoving.css'

const ServiceEarthmoving = () => {
    return (
        <SectionTemplate className='service-earthmoving' text='Movimiento de tierra' BackgroundIMG={BackgroundIMG} >
            <p>Somos especialistas en la ejecución de movimientos de tierra, excavaciones masivas, y obras complementarias. A la hora de planificar una construcción y antes de empezar cualquier tipo de obra, es necesario realizar una serie de trabajos para preparar el terreno lo cual nos permite empezar a realizar la cimentación y posterior edificación, contamos con una amplia experiencia desarrollando proyectos para diferentes empresas industriales de la región</p>
            <img src={EarthMovingIMG} alt="Movimiento de tierra" />
        </SectionTemplate>
    )
}

export default ServiceEarthmoving