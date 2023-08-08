import { useDispatch } from 'react-redux'
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.reducer'

import './CheckoutItem.scss'

function CheckoutItem({ item }) {
    const dispatch = useDispatch()

    const removeItem = () => dispatch(removeItemFromCart(item))
    const addItem = () => dispatch(addItemToCart(item))
    const clearItem = () => dispatch(clearItemFromCart(item))

    return (
        <div key={item.id} className='checkout-item'>
            <img src={item.imageUrl} />
            <span className='description'>{item.name}</span>
            
            <div className='quantity'>
                <span className='btn-control' onClick={removeItem}> - </span>
                <span>{item.quantity}</span>
                <span className='btn-control' onClick={addItem}> + </span>
            </div>

            <span className='price'>${item.price}</span>
            <span className='remove' onClick={clearItem}><b>&#10005;</b></span>

        </div>
    )
}


export default CheckoutItem;