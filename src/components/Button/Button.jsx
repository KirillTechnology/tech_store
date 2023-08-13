import { BaseButton, GoogleSignInButton, ButtonSpinner } from "./Button.styles.jsx"
// import './Button.scss'


export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google',
}

const getButton = (buttonType = 'base') => {
    return (
        {
            [BUTTON_TYPE_CLASSES.base]: BaseButton,
            [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        }[buttonType]
    )
}

function Button({ buttonType, children, isLoading, ...otherProps }) {
    const CustomButton = getButton(buttonType)

    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner /> : children}
        </CustomButton>
    )
}


export default Button