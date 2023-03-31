import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';

const CardContainer = styled.div`
    position: relative;   
    display: flex;
    flex-direction: column-reverse;
    width: 68vw;
    height: 55vw;
    margin: 2vw 0;
    background-color: #FF6060;
    border-radius: 10px;
    color: #FFF;

    @media ${device.tablet} {
        width: 24vw;
        height: 25vw;
        margin: 2vw 20px 2vw;
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: inherit;
        border-radius: inherit;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    }

    & h2 {
        display: block;
    }
`

export default function Card() {
    
    return (
    <CardContainer>
        <h2>Titre de la location</h2>
    </CardContainer>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    /*host{name, picture}: PropTypes.string.isRequired,*/
    rating: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    equipments: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired

  }
  
  Card.defaultProps = {
    id: '',
    title: '',
    cover: '',
    description: '',
    /*host{name, picture}: ,*/
    rating: '',
    location: '',
    equipments: '',
    tags: '',
  }

  