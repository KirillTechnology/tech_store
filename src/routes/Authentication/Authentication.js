import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import './Authentication.scss'


function Authentication() {
    return (
        <div class='authentication-page'>
            <h1>Authentication</h1>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}


export default Authentication