import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CheckoutItem.scss'

function CheckoutItem({ item }) {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)

    const removeItem = () => removeItemFromCart(item)
    const addItem = () => addItemToCart(item)
    const clearItem = () => clearItemFromCart(item)

    return (
        <div key={item.id} className='checkout-item'>
            <img src={item.imageUrl} />
            <span className='description'>{item.name}</span>
            
            <div className='quantity'>
                <span className='btn-control' onClick={removeItem}> - </span>
                <span>{item.quantity}</span>
                <span className='btn-control' onClick={addItem}> + </span>
            </div>

            <span className='price'>${item.price}.00</span>
            <span className='remove' onClick={clearItem}><b>&#10005;</b></span>

        </div>
    )
}


export default CheckoutItem;