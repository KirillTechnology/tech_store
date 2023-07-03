import { useNavigate } from 'react-router-dom'
import './DirectoryItem.scss';

function DirectoryItem({ category }) {
    const { title, imageUrl } = category;
    const navigate = useNavigate()

    // const goToShopHandler = () => {
    //     navigate('/shop')
    // }

    return (
        <div className="directory-item">
            <div className="directory-item-img" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="directory-item-text">
                <p><b>{title}</b></p>
                {/* <p>Shop Now</p> */}
            </div>
        </div>
    )
}

export default DirectoryItem