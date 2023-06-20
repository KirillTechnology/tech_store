import './Categories.scss'
import Category from '../Category/Category'

function Categories({categories}) {

    return (
        <div className="categories">
            {categories.map(x => (
                <Category key={x.id} category={x} />
            ))}
        </div>
    )
}

export default Categories