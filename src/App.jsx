import './App.css'
import Home from './components/home/home'
import Navbar from './components/commons/navbar/navbar'
import Services from './components/services/services'
import Footer from './components/commons/footer/footer'

function App() {

  return (
        <>
            <Navbar />
            <Home />
            <Services />
            <Footer />
        </>
    )
}

export default App
