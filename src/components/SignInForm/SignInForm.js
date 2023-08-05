import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"
import { getRedirectResult } from "firebase/auth";
import FormInput from "../FormInput/FormInput"
import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button"

import './SignInForm.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

function SignInForm() {
    const navigate = useNavigate()
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    useEffect(() => {
        const fn = async () => {
            const response = await getRedirectResult(auth)
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }
        fn()
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            setFormFields(defaultFormFields)
            navigate('/')
        } catch (e) {
            switch (e.code) {
                case 'auth/wrong-password':
                    alert('Wrong password')
                    break
                case 'auth/user-not-found':
                    alert('No user associated with this email')
                    break
                case 'auth/invalid-email':
                    alert('No user associated with this email')
                    break
                default:
                    console.log(e)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const signInGoogle = async () => {
        await signInWithGooglePopup();
        navigate('/')
    }

    return (
        <div className="sign-in-container">
            <h2>Sign In</h2>

            <form onSubmit={handleSubmit}>
                <FormInput label={'Email'} type='text' required onChange={handleChange} name="email" value={email} />

                <FormInput label={'Password'} type='password' required onChange={handleChange} name="password" value={password} />

                <br />
                <br />

                <Button buttonType={BUTTON_TYPE_CLASSES.base} type='submit' style={{ width: '160px' }}>Sign In</Button>
                <br />

                <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInGoogle}>Sign in with Google</Button>
            </form>

        </div>
    )
}


export default SignInForm