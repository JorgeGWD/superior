import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Home from '../../home/home'
import About from '../../about/about'
import Contact from '../../contact/contact'
import NotFound from '../../404/404'
import ServiceEarthmoving from '../../services/service-earthmoving/service-earthmoving'
import ServiceAdded from '../../services/service-added/service-added'
import ServiceConcrete from '../../services/service-concrete/service-concrete'
import ServiceDeepExcavation from '../../services/service-deep-excavation/service-deep-excavation'
import ServiceCertifiedRcd from '../../services/service-certified-rcd/service-certified-rcd'
import ServiceYellowMachineRental from '../../services/service-yellow-machine-rental/service-yellow-machine-rental'
import usePageTitle from '../../../hooks/usePageTilte'

function PageWrapper() {

    usePageTitle()

    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [location.pathname]);

    return (
        <>
            <Navbar />
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/sobre-nosotros' element={<About />} />
                <Route path='/contacto' element={<Contact />} />
                <Route path='/servicios/movimiento-de-tierra' element={<ServiceEarthmoving />} />
                <Route path='/servicios/agregados' element={<ServiceAdded />} />
                <Route path='/servicios/concretos' element={<ServiceConcrete />} />
                <Route path='/servicios/excavaciones-profundas' element={<ServiceDeepExcavation />} />
                <Route path='/servicios/certificado-rcd' element={<ServiceCertifiedRcd />} />
                <Route path='/servicios/alquiler-de-maquinaria-amarilla' element={<ServiceYellowMachineRental />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default PageWrapper