import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';

const CardContainer = styled.div`
    position: relative;   
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    margin: 4% 0;
    border-radius: 10px;
    background-color: #FF6060;
    color: #FFF;

    @media ${device.tablet} {
        width: 24vw;
        margin: 2vw 20px 2vw;
    }

    & img {
        pposition: inherit;
        display: block;
        border-radius: 10px 10px 0 0;
    }

    & div {
        display: flex;
    }

    & h2 {
        display: block;
        margin: 0;
        padding: 15px;
        font-size: 15px;
        font-weight: normal;
    }
`

export default function Card({ image, title }) {
    
    return (
    <CardContainer>
        <img src={image} alt="{title}" />
        <div>
            <h2>{title}</h2>
        </div>
    </CardContainer>
    )
}


Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    // id: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    // host{name, picture}: PropTypes.string.isRequired,
    // rating: PropTypes.string.isRequired,
    // location: PropTypes.string.isRequired,
    // equipments: PropTypes.string.isRequired,
    // tags: PropTypes.string.isRequired
  }
  
  Card.defaultProps = {
    title: '',
    cover: '',
//     id: '',
//     description: '',
//     host{name, picture}: ,
//     rating: '',
//     location: '',
//     equipments: '',
//     tags: '',
   }