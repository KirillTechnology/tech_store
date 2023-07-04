import { useNavigate } from 'react-router-dom'
import { DirectoryItemContainer, DirectoryItemImg, DirectoryItemText } from './DirectoryItem.styles';
// import './DirectoryItem.scss';

function DirectoryItem({ category }) {
    const { title, imageUrl } = category;
    const navigate = useNavigate()

    // const goToShopHandler = () => {
    //     navigate('/shop')
    // }

    return (
        <DirectoryItemContainer>
            <DirectoryItemImg imageUrl = {imageUrl}
                // style={{backgroundImage: `url(${imageUrl})`}} 
                
            />
            <DirectoryItemText>
                <p><b>{title}</b></p>
                {/* <p>Shop Now</p> */}
            </DirectoryItemText>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem