import { useNavigate } from 'react-router-dom'
import { DirectoryItemContainer, DirectoryItemImg, DirectoryItemText } from './DirectoryItem.styles';

function DirectoryItem({ category }) {
    const { title, imageUrl, route } = category;
    const navigate = useNavigate()

    const onNavigateHandler = () => {
        navigate(route)
    }

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <DirectoryItemImg 
                imageUrl = {imageUrl}
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