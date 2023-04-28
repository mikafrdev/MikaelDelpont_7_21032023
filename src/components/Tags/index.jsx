import PropTypes from 'prop-types'
import './Tags.css'

export default function Tags({tagsArray}) {
    
    return (
        <section className='tagscontainer'>
            <ul>
                {tagsArray.map((tag) => <li key={tag}>{tag}</li> )}
            </ul>
        </section>
    )
}

Tags.propTypes = {
    tagsArray: PropTypes.arrayOf(PropTypes.string)
}