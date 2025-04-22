import IsoLogo from '../../commons/iso-logo/iso-logo'
import SectionTemplate from '../../commons/section-template/section-template'
import BackgroundIMG from '../../../assets/images/servicio-certificado-rcd-header.jpg'
import CetificateRCD from '../../../assets/images/servicio-certificado-rcd-featured.jpg'
import HomeServices from '../../home/home-services/home-services'
import './service-certified-rcd.css'

const ServiceCertifiedRcd = () => {
    return (
        <>
            <SectionTemplate className='service-certified-rcd' text='Certificado RCD' BackgroundIMG={BackgroundIMG} showButton={true}>
                <div className="section-template__content-text">
                    <h2>Contamos con certificado de aprovechamiento de residuos RCD para su tratamiento y clasificación asegurando un aprovechamiento óptimo de los mismos siendo gestores ambientales sostenibles.</h2>
                    <h2>RCD (Residuos de Concretos)</h2>
                    <p>Residuos de demoliciones, remodelaciones, cilindros de prueba, bloques, adoquines libres de plástico.</p>
                    <h2>Residuos de Excavación </h2>
                    <p>Provenientes de excavaciones de obras y limpieza de terrenos u otras actividades similares.</p>
                    <IsoLogo />
                </div>
                <img src={CetificateRCD} alt="Certificado RCD" />
            </SectionTemplate>
            <HomeServices className='title__section-content' text='Otros Servicios' visibleServices={['movimiento-de-tierra', 'agregados', 'concretos', 'excavaciones-profundas', 'alquiler-de-maquinaria-amarilla']} />
        </>
    )
}

export default ServiceCertifiedRcd