import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

import CartItem from '../CartItem/CartItem'
import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button'
import Cover from '../Cover/Cover'
import { CartDropdown, CartDropdownItem } from './CartDropDown.styles'

import './CartDropDown.scss'


function CartDropDown() {
    const { cartItems, setIsCartOpen } = useContext(CartContext)
    
    const navigate = useNavigate()
    
    const goToCheckoutHandler = () => {
        setIsCartOpen(false)
        navigate('/checkout')
    }

    return (
        <>
            <CartDropdown>

                <CartDropdownItem>
                    {cartItems.length ? (
                        cartItems.map(item => <CartItem key={item.id} item={item} />)
                    ) : (
                        <span>Empty cart</span>
                    )}
                </CartDropdownItem>

                <Button
                    buttonType={BUTTON_TYPE_CLASSES.base}
                    onClick={goToCheckoutHandler}
                    disabled={cartItems.length ? false : true}
                >
                    GO TO CHECKOUT
                </Button>
            </CartDropdown>
            <Cover />
        </>
    )
}


export default CartDropDown