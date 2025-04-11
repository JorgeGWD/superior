import { useEffect } from 'react'

const BRAND_NAME = 'Superior'

const sectionsConfig = [
    { id: 'inicio', title: `${BRAND_NAME} | Inicio` },
    { id: 'inicio-servicios', title: `${BRAND_NAME} | Servicios` },
    { id: 'inicio-sobre-nosotros', title: `${BRAND_NAME} | Sobre Nosotros` },
    { id: 'inicio-proyectos', title: `${BRAND_NAME} | Proyectos` },
    { id: 'inicio-nuestras-plantas', title: `${BRAND_NAME} | Nuestras Plantas` },
]

const useDynamicTitleOnScroll = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        }

        const handleIntersection = (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const section = sectionsConfig.find(s => s.id === entry.target.id)
                    if (section) {
                        document.title = section.title

                        if (window.location.hash !== `#${section.id}`) {
                            history.replaceState(null, '', `#${section.id}`)
                        }
                    }
                }
            }
        }

        const observer = new IntersectionObserver(handleIntersection, observerOptions)

        sectionsConfig.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])
}

export default useDynamicTitleOnScroll