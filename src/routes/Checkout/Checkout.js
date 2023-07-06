import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './Checkout.scss'

function Checkout() {
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <h1>CHECKOUT</h1>
            <br />

            <div className='checkout-headers'>
                <span className='product'>Product</span>
                <span className='description'>Description</span>
                <span className='quantity'>Qty.</span>
                <span className='price'>$</span>
                <span className='remove'>Delete</span>
            </div>

            {cartItems.length ? null: <span className='empty'>Empty cart</span>}
            {cartItems.map(item => <CheckoutItem key={item.id} item={item} />)}



            <span className='total'>Total: ${cartTotal}.00</span>
        </div>
    )
}

export default Checkout;