import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import './CategoryPreview.scss'


function CategoryPreview({ title, products }) {
    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    products
                        .filter((_, i) => i < 4)
                        .map(x => <ProductCard key={x.id} product={x} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreview