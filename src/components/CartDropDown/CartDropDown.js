import CartIcon from '../CartIcon/CartIcon'
import Button from '../Button/Button'
import './CartDropDown.scss'


function CartDropDown() {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-dropdown-items'>
                <div className='cart-dropdown-item'>
                    <span>Item 1</span>
                    <span>$10</span>
                </div>
                <div className='cart-dropdown-item'>
                    <span>Item 2</span>
                    <span>$25</span>
                </div>
                <div className='cart-dropdown-item'>
                    <span>Item 1</span>
                    <span>$10</span>
                </div>
                <div className='cart-dropdown-item'>
                    <span>Item 2</span>
                    <span>$25</span>
                </div>
                <div className='cart-dropdown-item'>
                    <span>Item 1</span>
                    <span>$10</span>
                </div>
                <div className='cart-dropdown-item'>
                    <span>Item 2</span>
                    <span>$25</span>
                </div>
                <div className='cart-dropdown-item'>
                    <span>Item 1</span>
                    <span>$10</span>
                </div>
                <div className='cart-dropdown-item'>
                    <span>Item 2</span>
                    <span>$25</span>
                </div>
            </div>
            <Button buttonType='default'>GO TO CHECKOUT</Button>
        </div>
    )
}


export default CartDropDown