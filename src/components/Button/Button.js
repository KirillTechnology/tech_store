import './Button.scss'


const BUTTON_TYPE_CLASS = {
    default: 'default',
    google: 'google-sign-in',
}

function Button({ buttonType, children, ...otherProps }) {
    return (
        <button
            className={`btn ${BUTTON_TYPE_CLASS[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}


export default Button