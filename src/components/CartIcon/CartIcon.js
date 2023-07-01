import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.scss'


function CartIcon() {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleIsCartOpen = () => { setIsCartOpen(!isCartOpen) }

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='cart-icon' />
            <span className='cart-icon-count'>5</span>
        </div>
    )
}


export default CartIcon;