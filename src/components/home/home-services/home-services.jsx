import ImgFrame from '../../commons/imgframe/imgframe'
import Title from '../../commons/title/title'
import Service1 from '../../../assets/images/servicio-movimiento-de-tierra-header.jpg'
import Service2 from '../../../assets/images/servicio-agregados-header.jpg'
import Service3 from '../../../assets/images/servicio-concreto-header.jpg'
import Service4 from '../../../assets/images/excavaciones-profundas.jpg'
import Service5 from '../../../assets/images/certificado-rcd.jpg'
import Service6 from '../../../assets/images/servicio-alquiler-de-equipos-header.jpg'
import './home-services.css'
import { Link } from 'react-router'

const HomeServices = () => {
    return (
        <section className='container home-services' id='inicio-servicios'>
            <Title className={'title__content-line'} text={'¿Qué Hacemos?'} />
            <div className="home-services__content">
                <Link to={'/servicios/movimiento-de-tierra'}><ImgFrame src={Service1} alt={'Movimiento de tierra'} text={'Ver más'} /></Link>
                <Link to={'/servicios/agregados'}><ImgFrame src={Service2} alt={'Agregados'} text={'Ver más'} /></Link>
                <Link to={'/servicios/concretos'}><ImgFrame src={Service3} alt={'Concretos'} text={'Ver más'} /></Link>
                <Link to={'/servicios/excavaciones-profundas'}><ImgFrame src={Service4} alt={'Excavaciones profundas'} text={'Ver más'} /></Link>
                <Link to={'/servicios/certificado-rcd'}><ImgFrame src={Service5} alt={'Certificado RCD'} text={'Ver más'} /></Link>
                <Link to={'/servicios/alquiler-de-maquinaria-amarilla'}><ImgFrame src={Service6} alt={'Alquiler de Maquinaria Amarilla'} text={'Ver más'} /></Link>
            </div>
        </section>
    )
}

export default HomeServices