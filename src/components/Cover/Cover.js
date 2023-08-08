import { useSelector, useDispatch } from 'react-redux'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.reducer'
import './Cover.scss'


function Cover() {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

    return <div className='cover' onClick={toggleIsCartOpen}></div>
}


export default Cover;