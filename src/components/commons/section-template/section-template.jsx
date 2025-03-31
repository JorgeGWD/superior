import Title from '../title/title'
import './section-template.css'

const SectionTemplate = ({ className, text, children, BackgroundIMG }) => {
    return (
        <div className={className}>
            <div className={`header ${className}__header`} style={{ backgroundImage: `url(${BackgroundIMG})` }} >
                <div className={`container ${className}__header-content`}>
                    <Title text={text} className='title__primary' />
                </div>
            </div>
            <section className={`container ${className}__content`}>
                {children}
            </section>
        </div>
    )
}

export default SectionTemplate