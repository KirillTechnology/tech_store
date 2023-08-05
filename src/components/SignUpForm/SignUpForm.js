import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../FormInput/FormInput"
import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button"
import './SignUpForm.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUpForm() {
    const navigate = useNavigate()
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            setFormFields(defaultFormFields)
        } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
                alert('Cannot create a user, email already in use')
                return
            } else {
                console.log('User creating error:', e)
                return
            }

        }
        navigate('/')
        // console.log('COOL')
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <h3>Sign up with email</h3>

            <form onSubmit={handleSubmit}>
                <FormInput label={'Display name'} type='text' required onChange={handleChange} name="displayName" value={displayName} />
                
                <FormInput label={'Email'} type='text' required onChange={handleChange} name="email" value={email} />

                <FormInput label={'Password'} type='password' required onChange={handleChange} name="password" value={password} />
                
                <FormInput label={'Confirm password'} type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                
                <br/>
                <br/>
                
                <Button buttonType={BUTTON_TYPE_CLASSES.base} type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}


export default SignUpForm