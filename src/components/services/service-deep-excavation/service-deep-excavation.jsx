import SectionTemplate from '../../commons/section-template/section-template'
import HomeServices from '../../home/home-services/home-services'
import './service-deep-excavation.css'

const ServiceDeepExcavation = () => {
    return (
        <>
            <SectionTemplate className='service-deep-excavation' text='Excavaciones profundas' >
                <div className="section-template__content-text">
                    <h1>Service Deep Excavation</h1>
                    <p>Contamos con equipos de última tecnología para pilotaje lo que nos permite trabajar en simultáneo los diferentes proyectos, nuestra capacidad logística permite que la obra avance en los tiempos programados.</p>
                </div>
            </SectionTemplate>
            <HomeServices text='Otros Servicios' visibleServices={['movimiento-de-tierra', 'agregados', 'concretos', 'certificado-rcd', 'alquiler-de-maquinaria-amarilla']} />
        </>
    )
}

export default ServiceDeepExcavation