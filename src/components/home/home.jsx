import Button from '../commons/button/button'
import './home.css'
import Video from '../../assets/videos/superior-background-video.mp4'
import Poster from '../../assets/images/planta-de-trituracion.jpg'
import Title from '../commons/title/title'

const Home = () => {
    return (
        <section className='home' id='home'>
            <video className='home__video' poster={Poster} autoPlay loop muted>
                <source src={Video} type='video/mp4' />
                Tu navegador no soporta la etiqueta de video.
            </video>

            <div className="container home__content">
                <Title className={'title__primary'} text={'Grupo Minero Superior'} />
                <p>Ofrecemos soluciones integrales para la ejecución de grandes proyectos de ingeniería civil del sector industrial e inmobiliario.</p>
                <Button className={'button__secondary'} text={'Contáctanos'} />
                <div className="home__content-bottom">
                    <Title className={'title__content-uppercase'} text={'Tu aliado estratégico'} />
                </div>
            </div>
        </section>
    )
}

export default Home