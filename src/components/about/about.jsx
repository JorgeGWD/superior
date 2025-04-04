import SectionTemplate from '../commons/section-template/section-template'
import BackgroundIMG from '../../assets/images/sobre-nosotros-header.jpg'
import './about.css'

const About = () => {
    return (
        <SectionTemplate className='about' text='Sobre Nosotros' BackgroundIMG={BackgroundIMG}>
            <div className="section-template__content-text about__content-container">
                <div className="about__content-text">
                    <div className="about__content-text-intro">
                        <h2>GRUPO MINERO SUPERIOR es una empresa 100% colombiana, dedicada a la producción y comercialización de agregados, concreto premezclado Y MOVIMIENTOS DE TIERRA, con más de 10 años de experiencia.</h2>
                        <p>Desde entonces ha contribuido en el desarrollo de la región y participando con el suministro de materia prima en la producción de concreto, obras de ingeniería vial e infraestructura en el país</p>
                    </div>
                    <div className="about__content-text-intro">
                        <p>Gracias a una constante evolución que inició con el mejoramiento de nuestras plantas de producción, incorporando tecnología de última generación, seguido de la estandarización de los procesos y profesionalización de nuestro equipo de trabajo. En GRUPO MINERO SUPERIOR contamos con un sistema de gestión integrado “SGI” el cual permite una mejor planificación en nuestras operaciones, realizadas bajo los más altos estándares de calidad. Estamos presentes en el Departamento del Atlántico, atendiendo el mercado en la zona norte del país, con 2 plantas de producción de Agregados Pétreos, 1 planta de Concreto Premezclado y equipo de cimentaciones profundas.</p>
                    </div>
                </div>
                <div className="about__content-objetives">
                    <div className="about__content-objetive">
                        <h2>MISIÓN</h2>
                        <p>En GRUPO MINERO SUPERIOR producimos y comercializamos agregados pétreos y concreto premezclado, de acuerdo a los requisitos legales y normativos del sector de la construcción y a los establecidos por nuestros clientes. A través de nuestra labor contribuimos al desarrollo de las comunidades, generando conciencia de autocuidado, brindando ambientes seguros de trabajo y gestionando la preservación ambiental, que garantice la conservación de los recursos naturales, así como la continuidad y crecimiento de la organización.</p>
                        <p>Contamos con una alta capacidad de producción y cumplimiento de los requisitos del producto, aplicando estrictos controles de calidad y adelantándonos a los cambios del entorno.</p>
                    </div>
                    <div className="about__content-objetive-line"></div>
                    <div className="about__content-objetive">
                        <h2>VISIÓN</h2>
                        <p>Ser la empresa preferida por la industria de la construcción, para el suministro de agregados y concreto premezclado y proyectos de geotecnia garantizando la calidad de nuestros productos, incrementando la capacidad de producción y de gestión empresarial; a través de un compromiso de liderazgo para la toma de decisiones, estableciendo la seguridad laboral como factor decisor de comportamiento y la mejora de las competencias de nuestros colaboradores.</p>
                    </div>
                </div>
            </div>
        </SectionTemplate>
    )
}

export default About