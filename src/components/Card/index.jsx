import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './Card.css'


export default function Card({ image, title, id }) {
    
    return (
<div className='cardcontainer'>
        <Link to={`/details/${id}`}>
            <div className="cardImgContainer">
                <img src={image} alt="{title}" />
            </div>
            <div className="cardTitleContainer">
                <h2>{title}</h2>
            </div>
        </Link>
    </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
  }
  
  Card.defaultProps = {
    title: '',
    cover: ''
   }