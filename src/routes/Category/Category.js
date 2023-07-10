import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/categories.selector'
// import { CategoriesContext } from '../../context/CategoriesContext'

import ProductCard from '../../components/ProductCard/ProductCard'
import './Category.scss'


function Category() {
    const { category } = useParams()
    // const { categoriesMap } = useContext(CategoriesContext)
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState([])
    // console.log('rendering/re-rendering Category')
    

    useEffect(() => {
        // console.log('useEffect --> setProducts')
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