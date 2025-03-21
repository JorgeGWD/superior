import { useState } from "react";
import plantaDeCemento from "../../assets/images/planta-de-cemento.jpg";
import plantaDeLavado from "../../assets/images/planta-de-lavado.jpg";
import plantaDeTrituracionDeArena from "../../assets/images/planta-de-trituracion-de-arena.jpg";
import Title from '../commons/title/title';
import Arrow from '../../assets/images/icon-arrow.svg';
import './slider.css'

const images = [
    {
        src: plantaDeCemento,
        alt: "Planta de Concreto",
        text : "Con capacidad de producción 60 metros cúbicos por hora."
    },
    {
        src: plantaDeLavado,
        alt: "Planta de Lavado",
        text : "Con capacidad de producción de 250 toneladas por hora. Materia prima principal para la producción de concreto."
    },
    {
        src: plantaDeTrituracionDeArena,
        alt: "Planta de Trituracion de Arena",
        text : "Con capacidad de producción de 350 toneladas por hora para la producción de gravas 1”, grava y arena fina para producción de bloques y adoquines."
    }
]

const Slider = () => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide((prev) => (prev + 1) % images.length);
    }

    const prevSlide = () => {
        setSlide((prev) => (prev - 1 + images.length) % images.length);
    }

    console.log(images)

    return (
        <div className='slider' id="our-facilities">
            <div className="slider__tab slider__tab-left" onClick={prevSlide}>
                <img src={Arrow} alt="Arrow left" className='arrow arrow__left' />
            </div>
                <div className="slide" style={{ backgroundImage: `url(${images[slide].src})` }}>
                    <div className="slide__content">
                        <Title text={images[slide].alt} className="title__content-uppercase" />
                        <p>{images[slide].text}</p>
                    </div>
                </div>
            <div className="slider__tab slider__tab-right" onClick={nextSlide} >
                <img src={Arrow} alt="Arror right" className='arrow arrow__right' />
            </div>
            <span className='slider__buttons'>
                {images.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "slider__button" : "slider__button slider__button-inactive"}></button>
                })}
            </span>
        </div>
    )
}

export default Slider