import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Navigation.scss'


function Navigation() {
    return (
        <>
            <div className="navigation-bar">
                <Link to='/'> <Logo className="logo"/> </Link>

                <div className="menu-container">
                    <Link className="link" to='/shop'>SHOP</Link>
                    <Link className="link" to='/sign-in'>SIGN IN</Link>
                </div>
            </div>

            <Outlet />
        </>
    )
}


export default Navigation