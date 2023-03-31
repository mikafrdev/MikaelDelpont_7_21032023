import Banner from '../../components/Banner'
import Card from '../../components/Card'
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';
/*import colors from '../../utils/style/colors'*/

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const CardCSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 22px 0;
    padding: 6px 20px 50px 20px;
    border-radius: 25px;
    background-color: #FFF;

    @media ${device.tablet} {
        justify-content: space-between;
        background-color: #F7F7F7;
    }
`

export default function Home() {
    
    return (
        <HomeContainer>
            <Banner />
            <CardCSection>
                <Card/>
                <Card/><Card/><Card/>
            </CardCSection>
        </HomeContainer>
    )
}