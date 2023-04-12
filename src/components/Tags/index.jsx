import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';
import { Link } from "react-router-dom";

const TagList = styled.li`
        display: flex;
        margin: 0 10px 10px 0;
        padding: 4px 28px;
        border-radius: 5px;
        font-size: 10px;
        background-color: #FF6060;
        color: #FFF;
        white-space: nowrap;

    @media ${device.tablet} {
        
    }
}
`

export default function Tag({tag}) {
    return (
        <TagList>{tag}</TagList>
    )
}

Tag.propTypes = {
    tagName: PropTypes.string.isRequired
}
  
Tag.defaultProps = {
    tagName: ''
}