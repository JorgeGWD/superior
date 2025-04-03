import './App.css'
import Home from './components/home/home'
import Navbar from './components/commons/navbar/navbar'
import Footer from './components/commons/footer/footer'
import Contact from './components/contact/contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/404/404'
import ServiceEarthmoving from './components/services/service-earthmoving/service-earthmoving'
import ServiceAdded from './components/services/service-added/service-added'
import ServiceConcrete from './components/services/service-concrete/service-concrete'
import ServiceDeepExcavation from './components/services/service-deep-excavation/service-deep-excavation'
import ServiceCertifiedRcd from './components/services/service-certified-rcd/service-certified-rcd'
import ServiceYellowMachineRental from './components/services/service-yellow-machine-rental/service-yellow-machine-rental'

function App() {

  return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='servicios/movimiento-de-tierra' element={<ServiceEarthmoving />} />
                    <Route path='servicios/agregados' element={<ServiceAdded />} />
                    <Route path='servicios/concretos' element={<ServiceConcrete />} />
                    <Route path='servicios/excavaciones-profundas' element={<ServiceDeepExcavation />} />
                    <Route path='servicios/certificado-rcd' element={<ServiceCertifiedRcd />} />
                    <Route path='servicios/alquiler-de-maquinaria-amarilla' element={<ServiceYellowMachineRental />} />
                    <Route path='contacto' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
