import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';
import { Link } from "react-router-dom";

export default function Tag({ children }) {

    // <CardContainer>
    //     <LinkDetails to={`/details/${id}`}>
    //         <img src={image} alt="{title}" />
    //         <div>
    //             <h2>{title}</h2>
    //         </div>
    //     </LinkDetails>
    // </CardContainer>
    
    return (
    <li>
        {children}
    </li>
    )
}

Tag.propTypes = {
    tagName: PropTypes.string.isRequired
  }
  
  Tag.defaultProps = {
    tagName: ''
   }