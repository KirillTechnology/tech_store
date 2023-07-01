import './CartItem.scss'


function CartItem({ item }) {
    return (
        <div className='cart-item'>
            <img src={item.imageUrl} alt={item.name}/>
            <div className='cart-item-info'>
                <span className='name'>{item.name}</span>
                <span>{`${item.quantity}x $${item.price}`}</span>
            </div>
        </div>
    )
}


export default CartItem