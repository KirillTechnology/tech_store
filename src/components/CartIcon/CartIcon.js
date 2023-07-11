import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';

import { CartIconContainer, ShoppingIcon, CartIconCount } from './CartIcon.style';


function CartIcon() {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <CartIconCount>{cartCount}</CartIconCount>
        </CartIconContainer>
    )
}


export default CartIcon;