import './button.css'

const Button = ({ text, className, type }) => {
    return (
        <button className={`button ${className}`} type={type}>
            {text}
        </button>
    )
}

export default Button