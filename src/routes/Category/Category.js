import { useContext, useState, useEffect } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Category.scss'


function Category() {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div className='category-container'>
            <h2>{category.toUpperCase()}</h2>
            <div className='category-body'>
                {
                    products && products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}


export default Category