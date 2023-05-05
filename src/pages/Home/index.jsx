import Banner from '../../components/Banner'
import Card from '../../components/Card'
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';
import colors from "../../utils/style/colors";
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
    margin-bottom: 20px;
    border-radius: 25px;

    @media ${device.laptop} {
        margin: 43px 0;
        justify-content: space-evenly;
        background-color: ${colors.bg_cards_container};
    }

    @media ${device.kasa} {
        padding: 6px 0 20px;
    }
`

export default function Home() {

    return (
        <HomeContainer>
            <Banner className="homebanner">
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <CardCSection>
                {products.map((product) => {
                    return (
                        <Card key={product.id} id={product.id} title={product.title} cover={product.cover}  />
                    )
                })}
            </CardCSection>
        </HomeContainer>
    );
}