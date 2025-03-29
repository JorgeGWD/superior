import ImgFrame from '../../commons/imgframe/imgframe'
import Title from '../../commons/title/title'
import Service1 from '../../../assets/images/movimiento-de-tierra.jpg'
import Service2 from '../../../assets/images/trituracion.jpg'
import Service3 from '../../../assets/images/planta-de- concreto.jpg'
import Service4 from '../../../assets/images/excavaciones-profundas.jpg'
import Service5 from '../../../assets/images/certificado-rcd.jpg'
import Service6 from '../../../assets/images/planta-de-trituracion-de-arena.jpg'
import './home-services.css'

const HomeServices = () => {
    return (
        <section className='container home-services' id='home-services'>
            <Title className={'title__content-line'} text={'¿Qué Hacemos?'} />
            <div className="home-services__content">
                <ImgFrame src={Service1} alt={'Movimiento de tierra'} text={'Ver más'} />
                <ImgFrame src={Service2} alt={'Agregados'} text={'Ver más'} />
                <ImgFrame src={Service3} alt={'Concretos'} text={'Ver más'} />
                <ImgFrame src={Service4} alt={'Excavaciones profundas'} text={'Ver más'} />
                <ImgFrame src={Service5} alt={'Certificado RCD'} text={'Ver más'} />
                <ImgFrame src={Service6} alt={'Alquiler de Maquinaria Amarilla'} text={'Ver más'} />
            </div>
        </section>
    )
}

export default HomeServices