import banniere from '../../assets/banniere.jpg';
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';

const BanniereContainer = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${banniere});
    background-position: -300px -410px;
    background-repeat: no-repeat;
    width: 100%;
    height: 111px;
    overflow: hidden;
    border: 1px solid #000;
    border-radius: 10px;
    color: #FFF;
    font-size: 1vw;
    
    @media ${device.laptop} {
        background-position: 0 -300px;
        height: 223px;
        font-size: 48px;
        
    }
`

export default function Banniere({color}) {
    
    return (
            <BanniereContainer>
                <div>Chez vous, partout et ailleurs</div>
            </BanniereContainer>
    )
}