import TopHome from './top-home/top-home'
import HomeServices from './home-services/home-services'
import HomeAbout from './home-about/home-about'
import HomeProjects from './home-projects/home-projects'
import Slider from '../slider/slider'

const Home = () => {
    return (
        <>
            <TopHome />
            <HomeServices />
            <HomeAbout />
            <HomeProjects />
            <Slider />
        </>
    )
}

export default Home