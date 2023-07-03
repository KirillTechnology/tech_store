import './Category.scss';
import { useNavigate } from 'react-router-dom'

function Category({category}) {
    const {title, imageUrl} = category;

    const navigate = useNavigate()

    const goToShopHandler = () => {
        navigate('/shop')
    }

    return (
        <div className="category" onClick={goToShopHandler}>
            <div className="category-img" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="category-text">
                <p><b>{title}</b></p>
                {/* <p>Shop Now</p> */}
            </div>
        </div>
    )
}

export default Category