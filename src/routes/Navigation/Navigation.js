import { useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { UserContext } from "../../context/UserContext"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import './Navigation.scss'


function Navigation() {
    const { currentUser } = useContext(UserContext)

    return (
        <>
            <div className="navigation-bar">
                <Link to='/'> <Logo className="logo"/> </Link>

                <div className="menu-container">
                    <Link className="link" to='/shop'>SHOP</Link>

                    {currentUser ? <span className="link" onClick={signOutUser}>SIGN OUT</span> : <Link className="link" to='/auth'>SIGN IN</Link>}

                </div>
            </div>

            <Outlet />
        </>
    )
}


export default Navigation