import './title.css'

const Title = ({ text }) => {
    return (
        <div className="title">
            <div className="title__content">
                <h1>{text}</h1>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Title