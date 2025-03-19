import './title.css'

const Title = ({ text, className }) => {
    return (
        <div className="title">
            <div className={className}>
                <h1>{text}</h1>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Title