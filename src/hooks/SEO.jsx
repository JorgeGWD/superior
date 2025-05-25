import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const BRAND_NAME = 'Superior'

const BASE_URL = 'https://grupominerosuperior.com'

const SEO_CONFIG = {
  '/': {
    title: `${BRAND_NAME} | Inicio`,
    description: 'Bienvenido a Superior, especialistas en soluciones de ingeniería y minería en Perú.',
    robots: 'index, follow',
    canonical: `${BASE_URL}/`,
  },
  '/sobre-nosotros': {
    title: `${BRAND_NAME} | Sobre Nosotros`,
    description: 'Conoce a nuestro equipo y trayectoria en el sector de construcción y minería.',
    robots: 'index, follow',
    canonical: `${BASE_URL}/sobre-nosotros`,
  },
  '/contacto': {
    title: `${BRAND_NAME} | Contacto`,
    description: 'Contáctanos para cotizaciones y más información sobre nuestros servicios.',
    robots: 'index, follow',
    canonical: `${BASE_URL}/contacto`,
  },
  '/servicios/movimiento-de-tierra': {
    title: `${BRAND_NAME} | Movimiento de Tierra`,
    description: 'Expertos en movimiento de tierra con maquinaria pesada y personal calificado.',
    robots: 'index, follow',
    canonical: `${BASE_URL}/servicios/movimiento-de-tierra`,
  },
  '/servicios/agregados': {
    title: `${BRAND_NAME} | Agregados`,
    description: 'Suministro de agregados de alta calidad para proyectos de construcción.',
    robots: 'index, follow',
    canonical: `${BASE_URL}/servicios/agregados`,
  },
  '/servicios/concretos': {
    title: `${BRAND_NAME} | Concretos`,
    description: 'Concretos certificados y listos para obra, adaptados a tu necesidad.',
    robots: 'index, follow',
    canonical: `${BASE_URL}/servicios/concretos`,
  },
  '/servicios/excavaciones-profundas': {
    title: `${BRAND_NAME} | Excavaciones Profundas`,
    description: 'Excavaciones especializadas con tecnología de punta y seguridad garantizada.',
    robots: 'index, follow',
    canonical: `${BASE_URL}/servicios/excavaciones-profundas`,
  },
  '/servicios/certificado-rcd': {
    title: `${BRAND_NAME} | Certificado RCD`,
    description: 'Gestionamos tu certificado de residuos de construcción con respaldo técnico.',
    robots: 'index, follow',
    canonical: `${BASE_URL}/servicios/certificado-rcd`,
  },
  '/servicios/alquiler-de-maquinaria-amarilla': {
    title: `${BRAND_NAME} | Alquiler de Maquinaria Amarilla`,
    description: 'Alquiler de maquinaria pesada con operadores y mantenimiento garantizado.',
    robots: 'index, follow',
    canonical: `${BASE_URL}/servicios/alquiler-de-maquinaria-amarilla`,
  },
}

function SEO() {
  const { pathname } = useLocation();
  const meta = SEO_CONFIG[pathname] || {
    title: `${BRAND_NAME} | Página no encontrada`,
    description: 'La página solicitada no existe. Explora nuestros servicios desde el inicio.',
    robots: 'noindex, nofollow',
    canonical: `${BASE_URL}${pathname}`,
  }

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content={meta.robots} />
      <link rel="canonical" href={meta.canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      {/*Google verification*/}
      <meta name="google-site-verification" content="3JE5I927qJhjP8iYWfjL5FvsilvuRMARJoKLKmEP-NA" />
    </Helmet>
  )
}

export default SEO