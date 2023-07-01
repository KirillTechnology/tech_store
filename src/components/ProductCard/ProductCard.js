import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import Button from '../Button/Button';
import './ProductCard.scss'

function ProductCard({ product }) {
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => { addItemToCart(product) }

    return (
        <div className='product-card-container'>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <div className='product-card-info'>
                <span className='name'>{product.name}</span>
                <span className='price'>${product.price}</span>
                <Button buttonType='default' onClick={addProductToCart}>Add to cart</Button>
            </div>
        </div>
    )
}


export default ProductCard;