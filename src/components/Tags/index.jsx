import PropTypes, { array } from 'prop-types'
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
    tagName: PropTypes.string.isRequired
}
  
Tags.defaultProps = {
    tagName: ''
}