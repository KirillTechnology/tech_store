import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector'

import ProductCard from '../../components/ProductCard/ProductCard'
import Spinner from '../../components/Spinner/Spinner'
import './Category.scss'


function Category() {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState([])


    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div className='category-container'>
            <h2>{category.toUpperCase()}</h2>

            {isLoading ? <Spinner /> : (
                <div className='category-body'>
                    {
                        products && products.map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            )}
            
        </div>
    )
}


export default Category