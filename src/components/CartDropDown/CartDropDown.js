import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import CartItem from '../CartItem/CartItem'
import Button from '../Button/Button'

import './CartDropDown.scss'


function CartDropDown() {
    const { cartItems } = useContext(CartContext)

    return (
        <>
            <div className='cart-dropdown-container'>

                <div className='cart-dropdown-items'>
                    {cartItems.length ? (
                        cartItems.map(item => <CartItem key={item.id} item={item} />)
                    ) : (
                        <span>Empty cart</span>
                    )}
                </div>


                <Button buttonType='default' disabled={cartItems.length ? false : true}>GO TO CHECKOUT</Button>
            </div>
        </>
    )
}


export default CartDropDown