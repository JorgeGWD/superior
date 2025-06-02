import Title from '../../commons/title/title'
import ProyectosIMG from '../../../assets/images/proyectos-header.jpg'
import './home-projects.css'
import Button from '../../commons/button/button'
import { useNavigate } from 'react-router-dom'

const HomeProjects = () => {
    const navigate = useNavigate()

    return (
        <div id='inicio-proyectos'>
            <section className='container home-projects'>
                <div className="home-projects-tex">
                    <Title className={'title__section-content'} text={'¿Por qué GRUPO MINERO SUPERIOR?'} />
                    <p>GRUPO MINERO SUPERIOR es una empresa 100% colombiana, dedicada a la producción y comercialización de agregados, concreto premezclado Y MOVIMIENTOS DE TIERRA, con más de 10 años de experiencia.</p>
                    <Button className={'button__secondary'} onClick={() => navigate("/sobre-nosotros")} text={'Sobre Nosotros'} />
                </div>
                <img src={ProyectosIMG} alt="Proyectos" />
            </section>
        </div>
    )
}

export default HomeProjects