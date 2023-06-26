import { useState, useEffect } from "react"
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"
import { getRedirectResult } from "firebase/auth";
import FormInput from "../FormInput/FormInput"
import Button from "../Button/Button"
import './SignInForm.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    useEffect(() => {
        const fn = async () => {
            const response = await getRedirectResult(auth)
            console.log(response)
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }
        fn()
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            setFormFields(defaultFormFields)
        } catch (e) {
            switch (e.code) {
                case 'auth/wrong-password':
                    alert('Wrong password')
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
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    return (
        <div className="sign-in-container">
            <h2>Sign In</h2>

            <form onSubmit={handleSubmit}>
                <FormInput label={'Email'} type='text' required onChange={handleChange} name="email" value={email} />

                <FormInput label={'Password'} type='password' required onChange={handleChange} name="password" value={password} />

                <br />
                <br />

                <Button buttonType={'default'} type='submit' style={{ width: '160px' }}>Sign In</Button>
                <br />
                {/* <hr style={{width: '220px'}}/> */}
                {/* <br/> */}
                <Button buttonType={'google'} type='button' onClick={signInGoogle}>Sign in with Google</Button>
                {/* <br/> */}
                {/* <Button buttonType={'google'} onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</Button> */}

            </form>

        </div>
    )
}


export default SignInForm