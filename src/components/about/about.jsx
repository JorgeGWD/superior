import Button from '../commons/button/button'
import Title from '../commons/title/title'
import './about.css'

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container about__content">
                <Title className={'title__content-uppercase'} text={'Nuestro Compromiso'} />
                <div className="about__content-text">
                    <p>En Grupo Minero Superior nos comprometemos a ser una empresa líder en ofrecer soluciones integrales para la ejecución de grandes proyectos de ingeniería civil del sector industrial e inmobiliario.</p>
                    <p>Nuestro objetivo es satisfacer las necesidades de nuestros clientes convirtiéndonos en un aliado estratégico en la primera fase de los proyectos en mejoramiento de suelos, extensión y compactación de material granular, alquiler de equipos y el desarrollo de grandes plataformas.</p>
                    <p>Contamos con plantas industriales para la producción de gravas, arenas finas y concreto contribuyendo al desarrollo de la región y generando valor para los accionistas y colaboradores.</p>
                </div>
                <Button className={'button__secondary'} text={'Más Sobre Nosotros'} />
            </div>
        </section>
    )
}

export default About