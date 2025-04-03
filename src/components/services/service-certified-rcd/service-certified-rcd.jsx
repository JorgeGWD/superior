import SectionTemplate from '../../commons/section-template/section-template'
import HomeServices from '../../home/home-services/home-services'
import './service-certified-rcd.css'

const ServiceCertifiedRcd = () => {
    return (
        <>
            <SectionTemplate className='service-certified-rcd' text='Certificado RCD' >
                <div className="section-template__content-text">
                    <h2>Service Certified RCD</h2>
                    <p>Contamos con certificado de aprovechamiento de residuos RCD, proveniente de demoliciones, remodelaciones, excavaciones, productos de cortes, para su tratamiento y clasificación asegurando un aprovechamiento optimo de los mismos siendo gestores ambientales sostenibles.</p>
                </div>
            </SectionTemplate>
            <HomeServices className='title__section-content' text='Otros Servicios' visibleServices={['movimiento-de-tierra', 'agregados', 'concretos', 'excavaciones-profundas', 'alquiler-de-maquinaria-amarilla']} />
        </>
    )
}

export default ServiceCertifiedRcd