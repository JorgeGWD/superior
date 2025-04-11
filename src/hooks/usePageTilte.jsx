import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BRAND_NAME = 'Superior'

const usePageTitle = () => {
    const location = useLocation()

    useEffect(() => {
        const { pathname } = location

        const titles = {
            '/': `${BRAND_NAME} | Inicio`,
            '/sobre-nosotros': `${BRAND_NAME} | Sobre Nosotros`,
            '/contacto': `${BRAND_NAME} | Contacto`,
            '/servicios/movimiento-de-tierra': `${BRAND_NAME} | Movimiento de Tierra`,
            '/servicios/agregados': `${BRAND_NAME} | Agregados`,
            '/servicios/concretos': `${BRAND_NAME} | Concretos`,
            '/servicios/excavaciones-profundas': `${BRAND_NAME} | Excavaciones Profundas`,
            '/servicios/certificado-rcd': `${BRAND_NAME} | Certificado RCD`,
            '/servicios/alquiler-de-maquinaria-amarilla': `${BRAND_NAME} | Alquiler de Maquinaria Amarilla`,
        };

        document.title = titles[pathname] || `${BRAND_NAME} | Página no encontrada`
    }, [location])
}

export default usePageTitle