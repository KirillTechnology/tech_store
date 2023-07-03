import Category from '../DirectoryItem/DirectoryItem'
import './Directory.scss'

function Directory({ categories }) {

    return (
        <div className='directory-container'>
            <div className="directory-items">
                {categories.map(x => (
                    <Category key={x.id} category={x} />
                ))}
            </div>
        </div>
    )
}

export default Directory