import ImgFrame from '../commons/imgframe/imgframe'
import Title from '../commons/title/title'
import './projects.css'
import Project1 from '../../assets/images/equipos.jpg'
import Project2 from '../../assets/images/plantas.jpg'
import Project3 from '../../assets/images/proyectos.jpg'

const Projects = () => {
    return (
        <section className='container projects' id='projects'>
            <Title className={'title__content-line'} text={'Nuestros Proyectos'} />
            <div className="projects__content">
                <ImgFrame src={Project1} alt={'Equipos'} text={'Ver más'} />
                <ImgFrame src={Project2} alt={'Plantas'} text={'Ver más'} />
                <ImgFrame src={Project3} alt={'Proyectos'} text={'Ver más'} />
            </div>
        </section>
    )
}

export default Projects