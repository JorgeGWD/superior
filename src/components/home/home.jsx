import Button from '../commons/button/button'
import  './home.css'

const Home = () => {
    return (
        <section className='home' id='home'>
            <div className="home__content">
                <h1>Grupo Minero Superior</h1>
                <p>Ofrecemos soluciones integrales para la ejecución de grandes proyectos de ingeniería civil del sector industrial e inmobiliario.</p>
                <Button className={'button__secondary'} text={'Más Sobre Nosotros'} />
            </div>
        </section>
    )
}

export default Home