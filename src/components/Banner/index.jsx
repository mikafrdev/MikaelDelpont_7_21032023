import styled from "styled-components";
import { device } from "../../utils/style/Devices";

export const BannerContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${props => props.height};
    overflow: hidden;
    border: 1px solid #000;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-image: url(${props => props.bg});
    background-position: ${props => props.bgPosition};
    background-size: ${props => props.bgSize};
    background-color: ${props => props.page};
    
    @media ${device.tablet} {
        background-position: 0 -300px;
        height: 223px;
        border-radius: 25px;
    }
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: inherit;
        background-color: rgba(0,0,0,.3);
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

export default function Banner({bg, bgSize, bgPosition, height, page, children}) {

    return (
        <BannerContainer bg={bg} bgPosition={bgPosition} bgSize={bgSize} height={height} page={page}>
            {children}
        </BannerContainer>
    );
}