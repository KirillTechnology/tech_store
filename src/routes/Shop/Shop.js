import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Shop.scss'


function Shop() {
    const { products } = useContext(ProductsContext)

    return (
        <div className='shop'>
            <div className='products-container'>
                {products.map(x => (<ProductCard key={x.id} product={x} />))}
            </div>
        </div>
    )
}


export default Shop