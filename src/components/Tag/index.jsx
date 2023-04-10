import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';
import { Link } from "react-router-dom";

const TagContainer = styled.h3`
    position: relative;
    width: 100%;
    height: 255px;
    margin: 4% 0;
    border-radius: 10px;
    background-color: #FF6060;
    color: #FFF;
    
    @media ${device.tablet} {
        
    }
`

export default function Tag({ tagName }) {

    // <CardContainer>
    //     <LinkDetails to={`/details/${id}`}>
    //         <img src={image} alt="{title}" />
    //         <div>
    //             <h2>{title}</h2>
    //         </div>
    //     </LinkDetails>
    // </CardContainer>
    
    return (
    <TagContainer>
        {tagName}
    </TagContainer>
    )
}

Tag.propTypes = {
    tagName: PropTypes.string.isRequired
  }
  
  Tag.defaultProps = {
    tagName: ''
   }