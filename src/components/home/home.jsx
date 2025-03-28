import About from '../about/about';
import Projects from '../projects/projects';
import Services from '../services/services';
import Slider from '../slider/slider';
import TopHome from '../top-home/top-home';

const Home = () => {
    return (
        <>
            <TopHome />
            <Services />
            <About />
            <Projects />
            <Slider />
        </>
    );
};

export default Home;