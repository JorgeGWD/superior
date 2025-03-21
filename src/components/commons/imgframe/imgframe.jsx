import './imgframe.css'

const ImgFrame = ({ src, alt, text }) => {
    return (
        <div className="img-frame">
            <div className="img-frame__content">
                <img src={src} alt={alt} />
                <h3>{text}</h3>
            </div>
            <h3>{alt}</h3>
        </div>
    )
}

export default ImgFrame