import { useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"

import { ReactComponent as Logo } from '../../assets/crown.svg'
// import { UserContext } from "../../context/UserContext"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { CartContext } from "../../context/CartContext"
import CartIcon from "../../components/CartIcon/CartIcon"
import CartDropDown from "../../components/CartDropDown/CartDropDown"
import Cover from "../../components/Cover/Cover"

import { NavigationBar, LogoContainer, Menu, NavLink, MainContainer } from './Navigation.styles.jsx'
import Notification from "../../components/Notification/Notification"
// import './Navigation.styles.scss'


function Navigation() {
    // const { currentUser } = useContext(UserContext)
    const currentUser = useSelector(selectCurrentUser)
    const { isCartOpen } = useContext(CartContext)

    return (
        <>
            <NavigationBar>
                <LogoContainer to='/'>
                    <Logo />
                </LogoContainer>

                <Menu>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink> : <NavLink to='/auth'>SIGN IN</NavLink>}
                    <CartIcon />
                </Menu>

                {isCartOpen && <CartDropDown />}
            </NavigationBar>

            <Notification />

            <MainContainer>
                <Outlet />
            </MainContainer>

            {/* <div className="navigation-bar">
                <Link to='/'> <Logo className="logo" /> </Link>

                <div className="menu-container">
                    <Link className="link" to='/shop'>SHOP</Link>

                    {currentUser ? <span className="link" onClick={signOutUser}>SIGN OUT</span> : <Link className="link" to='/auth'>SIGN IN</Link>}

                    <CartIcon />
                </div>

                {isCartOpen && <CartDropDown />}
            </div>

            <div className="main">
                <Outlet />
            </div> */}

        </>
    )
}


export default Navigation