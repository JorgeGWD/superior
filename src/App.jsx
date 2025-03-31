import './App.css'
import Home from './components/home/home'
import Navbar from './components/commons/navbar/navbar'
import Footer from './components/commons/footer/footer'
import Contact from './components/contact/contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/404/404'

function App() {

  return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='contacto' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
