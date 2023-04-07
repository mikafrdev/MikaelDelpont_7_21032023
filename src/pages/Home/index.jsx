import Banner from '../../components/Banner'
import BannerHome from "../../assets/banner-home.jpg";
import Card from '../../components/Card'
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';
/*import colors from '../../utils/style/colors'*/
// import { Link } from 'react-router-dom'
import products from "../../data/logements.json";

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
    border-radius: 25px;
    background-color: #FFF;

    @media ${device.tablet} {
        justify-content: space-between;
        padding: 6px 20px 20px 20px;
        background-color: #F7F7F7;
    }
`

export default function Home() {

    return (
        <HomeContainer>
            <Banner image={BannerHome} />
            <CardCSection>
                {products.map((product) => {
                    return (
                        <Card key={product.id} image={product.cover} title={product.title} />
                    )
                })}
            </CardCSection>
        </HomeContainer>
    );
}