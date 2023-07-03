import { useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'
import './CategoriesPreview.scss'


function CategoriesPreview() {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <div className='categories-preview'>
            {Object
                .keys(categoriesMap)
                .map(title => {
                    const products = categoriesMap[title]
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </div>
    )
}


export default CategoriesPreview