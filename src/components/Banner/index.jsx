import banner from '../../assets/banner.jpg';
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';

const BannerContainer = styled.div`   
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 111px;
    overflow: hidden;
    border: 1px solid #000;
    border-radius: 10px;
    background-image: url(${banner});
    background-position: -250px -410px;
    background-repeat: no-repeat;
    
    @media ${device.tablet} {
        background-position: 0 -300px;
        height: 223px;
    }

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: inherit;
        background-color: rgba(0,0,0,0.25);
    }
    
    & h1 {
        margin: 0 12vw;
        color: #FFF;
        font-size: 1.9em;
        font-weight: normal;
        z-index: 1;

        @media ${device.tablet} {
            font-size: 48px;
        }
    }    
`

export default function Banner({color}) {
    
    return (
            <BannerContainer>
                <h1>Chez vous, partout et ailleurs</h1>
            </BannerContainer>
    )
}