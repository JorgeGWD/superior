import Button from '../commons/button/button'
import './home.css'
import Video from '../../assets/videos/superior-background-video.mp4'
import Poster from '../../assets/images/planta-de-trituracion.jpg'

const Home = () => {
    return (
        <section className='home' id='home'>
            <video className='home__video' poster={Poster} autoPlay loop muted>
                <source src={Video} type='video/mp4' />
                Tu navegador no soporta la etiqueta de video.
            </video>

            <div className="container home__content">
                <h1>Grupo Minero Superior</h1>
                <p>Ofrecemos soluciones integrales para la ejecución de grandes proyectos de ingeniería civil del sector industrial e inmobiliario.</p>
                <Button className={'button__secondary'} text={'Contáctanos'} />
            </div>
        </section>
    )
}

export default Home