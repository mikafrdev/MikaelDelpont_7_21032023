import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';
import { Link } from "react-router-dom";



const CardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 255px;
    margin: 4% 0;
    border-radius: 10px;
    background-color: #FF6060;
    color: #FFF;
    


    @media ${device.tablet} {
        width: 24vw;
        margin: 2vw 20px 2vw;
    }

    & a {
        text-decoration: none;
    }

    & .cardImgContainer {
        display: flex;
        justify-content: space-between;
        height: 255px;
    }

    & img {
        width: 100%;
        height: 255px;
        pposition: inherit;
        display: block;
        border-radius: 10px;
    }

    & .cardTitleContainer {
        position: absolute;
        width: 100%;
        bottom: 0;
        background: linear-gradient(0deg,
            rgba(0,0,0,0.1) 0%,
            rgba(0,0,0,0.1) 100%);
        border-radius: 10px;
    }

    & .cardTitleContainer h2 {
        width: 44%;
        margin: 0;
        padding: 15px;
        font-size: 15px;
        font-weight: normal;
        color: #FFF;
    }
`

export default function Card({ image, title, id }) {

    // <CardContainer>
    //     <LinkDetails to={`/details/${id}`}>
    //         <img src={image} alt="{title}" />
    //         <div>
    //             <h2>{title}</h2>
    //         </div>
    //     </LinkDetails>
    // </CardContainer>
    
    return (
    <CardContainer>
        <Link to={`/details/${id}`}>
            <div className="cardImgContainer">
                <img src={image} alt="{title}" />
            </div>
            <div className="cardTitleContainer">
                <h2>{title}</h2>
            </div>
        </Link>
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