import './App.css'
import Home from './components/home/home'
import Navbar from './components/commons/navbar/navbar'
import Services from './components/services/services'
import Footer from './components/commons/footer/footer'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Slider from './components/slider/slider'

function App() {

  return (
        <>
            <Navbar />
            <Home />
            <Services />
            <About />
            <Projects />
            <Slider />
            <Footer />
        </>
    )
}

export default App
