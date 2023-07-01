import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cover.scss'


function Cover() {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)
    const toggleIsCartOpen = () => { setIsCartOpen(!isCartOpen) }

    return <div className='cover' onClick={toggleIsCartOpen}></div>
}


export default Cover;