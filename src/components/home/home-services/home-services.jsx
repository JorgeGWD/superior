import ImgFrame from '../../commons/imgframe/imgframe';
import Title from '../../commons/title/title';
import Service1 from '../../../assets/images/servicio-movimiento-de-tierra-header.jpg'
import Service2 from '../../../assets/images/servicio-agregados-header.jpg'
import Service3 from '../../../assets/images/servicio-concreto-header.jpg'
import Service4 from '../../../assets/images/excavaciones-profundas.jpg'
import Service5 from '../../../assets/images/certificado-rcd.jpg'
import Service6 from '../../../assets/images/servicio-alquiler-de-equipos-header.jpg'
import { Link } from 'react-router';
import './home-services.css';

const services = [
    { id: 'movimiento-de-tierra', img: Service1, alt: 'Movimiento de tierra' },
    { id: 'agregados', img: Service2, alt: 'Agregados' },
    { id: 'concretos', img: Service3, alt: 'Concretos' },
    { id: 'excavaciones-profundas', img: Service4, alt: 'Excavaciones profundas' },
    { id: 'certificado-rcd', img: Service5, alt: 'Certificado RCD' },
    { id: 'alquiler-de-maquinaria-amarilla', img: Service6, alt: 'Alquiler de Maquinaria Amarilla' }
];

const HomeServices = ({ visibleServices = [], className, text }) => {
    return (
        <section className='container home-services' id='inicio-servicios'>
            <Title className={className} text={text} />
            <div className="home-services__content">
                {services
                    .filter(service => visibleServices.includes(service.id))
                    .map(service => (
                        <Link key={service.id} to={`/servicios/${service.id}`}>
                            <ImgFrame src={service.img} alt={service.alt} text={'Ver más'} />
                        </Link>
                    ))}
            </div>
        </section>
    );
};

export default HomeServices;