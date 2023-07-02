import './Category.scss';

function Category({category}) {
    const {title, imageUrl} = category;

    return (
        <div className="category">
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