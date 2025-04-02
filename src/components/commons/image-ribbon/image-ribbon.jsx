import './image-ribbon.css'

const ImageRibbon = ({ columns, rows, images }) => {
    return (
        <div className='image-ribbon'  style={{ display: "grid", gridTemplateColumns:`repeat(${columns}, 1fr)`, gridTemplateRows:`repeat(${rows}, 1fr)` }}>
            {images.map((img, index) => (
                <img key={index} src={img} alt={`Imagen ${index}`} className="ribbon-image" />
            ))}
        </div>
    )
}

export default ImageRibbon