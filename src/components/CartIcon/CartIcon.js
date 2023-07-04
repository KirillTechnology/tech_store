import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartIconContainer, ShoppingIcon, CartIconCount } from './CartIcon.style';
// import './CartIcon.scss'


function CartIcon() {
    const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => { setIsCartOpen(!isCartOpen) }

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <CartIconCount>{cartCount}</CartIconCount>
        </CartIconContainer>
    )
}


export default CartIcon;