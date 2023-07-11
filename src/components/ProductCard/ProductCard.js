import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import { useContext } from 'react';
import { NotificationContext } from '../../context/NotificationContext';

import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button';
import './ProductCard.scss'


function ProductCard({ product }) {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const { notify } = useContext(NotificationContext)

    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product))
        notify(`${product.name} added to cart`)
    }

    return (
        <div className='product-card-container'>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <div className='product-card-info'>
                <span className='name'>{product.name}</span>
                <span className='price'>${product.price}</span>
                <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={addProductToCart}>Add to cart</Button>
            </div>
        </div>
    )
}


export default ProductCard;