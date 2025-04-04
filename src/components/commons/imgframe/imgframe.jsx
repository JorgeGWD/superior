import './imgframe.css'

const ImgFrame = ({ src, alt, text }) => {
    return (
        <div className="img-frame">
            <div className="img-frame__content">
                <img width='500' height='280' src={src} alt={alt} />
                <p>{text}</p>
            </div>
            <h3>{alt}</h3>
        </div>
    )
}

export default ImgFrame