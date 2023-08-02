import { useSelector } from 'react-redux'
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector'

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'
import Spinner from '../../components/Spinner/Spinner'
import './CategoriesPreview.scss'


function CategoriesPreview() {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)

    return (
        <div className='categories-preview'>
            {isLoading ? <Spinner /> :
                (
                    Object
                        .keys(categoriesMap)
                        .map(title => {
                            const products = categoriesMap[title]
                            return <CategoryPreview key={title} title={title} products={products} />
                        })
                )
            }

        </div>
    )
}


export default CategoriesPreview