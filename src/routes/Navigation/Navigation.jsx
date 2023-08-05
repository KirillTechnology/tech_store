import { Outlet, Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
import { selectIsCartOpen } from "../../store/cart/cart.selector"

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { signOutStart } from "../../store/user/user.action"
// import { signOutUser } from "../../utils/firebase/firebase.utils"

import CartIcon from "../../components/CartIcon/CartIcon"
import CartDropDown from "../../components/CartDropDown/CartDropDown"
import Cover from "../../components/Cover/Cover"
import { NavigationBar, LogoContainer, Menu, NavLink, MainContainer } from './Navigation.styles.jsx'
import Notification from "../../components/Notification/Notification"


function Navigation() {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    const signOutUser = () => dispatch(signOutStart())

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