import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import PaymentForm from '../../components/PaymentForm/PaymentForm';

import './Checkout.scss'

function Checkout() {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

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
            <br/>
            <br/>
            <PaymentForm />
        </div>
    )
}

export default Checkout;