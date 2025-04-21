import { Link } from 'react-router'
import Button from '../button/button'
import Title from '../title/title'
import './section-template.css'

const SectionTemplate = ({ className, text, children, BackgroundIMG, showButton = false }) => {
    return (
        <div className={className}>
            <div className={`header ${className}__header`} style={{ backgroundImage: `url(${BackgroundIMG})` }} >
                <div className={`container ${className}__header-content section-template__header-content`}>
                    <Title text={text} className='title__primary' />
                    {showButton && (
                        <Link to="/contacto">
                            <Button className={'button__secondary'} text={'Pide una cotización'} />
                        </Link>
                    )}
                </div>
            </div>
            <section className={`container section-template ${className}__content`}>
                {children}
            </section>
        </div>
    )
}

export default SectionTemplate