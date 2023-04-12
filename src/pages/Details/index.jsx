import { useParams } from "react-router-dom";
import products from "../../data/logements.json";
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';
import Tags from '../../components/Tags';
import PictoStar from "../../components/Pictos";
import styled from 'styled-components';
import { device } from '../../utils/style/Devices';
import colors from "../../utils/style/colors";

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & h1, h2, h3 {
        color: ${colors.primary};
    }

    & h1 {
        font-size: 18px;
        font-weight: normal;
        margin: 15px 0 0 0;
        line-height: 25px;
    }

    & h2 {
        margin: 5px 0 0 0;
        font-size: 14px;
        font-weight: normal;
        line-height: 20px;
    }

    & h3 {
        font-size: 18px;
        font-weight: normal;
    }
`

const DetailsSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 10px 0;
    border-radius: 25px;
    background-color: #FFF;

    @media ${device.tablet} {
        padding: 6px 0 20px 0;
    }
`

const InfosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0 0 0;

    @media ${device.tablet} {
        
    }
`

const TagsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 10px 0 0 0;

    @media ${device.tablet} {
        
    }
}
`

const StarsContainer = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 1px 0 0 0;

    @media ${device.tablet} {
        
    }

    & li {
        margin-right: 6px;
    }
`

const HostContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    @media ${device.tablet} {
        
    }

    & h3 {
        font-size: 12px;
    }
    
    & img {
        width: 32px;
        height: 32px;
        margin-left: 10px;
    }
    `

    export default function Details() {    
    const {id} = useParams();
    const annonce = 
        products
            .filter(annonce => annonce.id === id);

            // console.log("images : ", annonce)
            // console.log("ratings : ", annonce[0].rating)
            // {annonce[0].rating.map((item, index) => <PictoStar key={item} tag={item} className="{index}" />)}
            const rating = annonce[0].rating;
            // console.log("rating : ", rating)
            // `{fillColor=${colors.primary}}`

    return (
        
        <DetailsContainer>

            <Slideshow images={`${annonce[0].pictures}`} />

            <h1>{annonce[0].title}</h1>

            <h2>{annonce[0].location}</h2>

            <TagsContainer> 
                {annonce[0].tags.map((item) => <Tags key={item} tag={item} />)}
            </TagsContainer>
            

            <InfosContainer>

                <StarsContainer>
                    <PictoStar fillColor={rating >= 1 ? `${colors.primary}` : ""} />
                    <PictoStar fillColor={rating >= 2 ? `${colors.primary}` : ""} />
                    <PictoStar fillColor={rating >= 3 ? `${colors.primary}` : ""} />
                    <PictoStar fillColor={rating >= 4 ? `${colors.primary}` : ""} />
                    <PictoStar fillColor={rating >= 5 ? `${colors.primary}` : ""} />
                </StarsContainer>

                <HostContainer>
                    <h3>{annonce[0].host.name}</h3>

                    <div>
                        <img src={annonce[0].host.picture} alt="alt text" />
                    </div>
                </HostContainer>

            </InfosContainer>
            
            <DetailsSection>
                <Collapse title="Description">
                    Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
                </Collapse>

                <Collapse title="Équipements">
                    <ul>
                        <li>Climatisation</li>
                        <li>Wi-Fi</li>
                        <li>Cuisine</li>
                        <li>Espace de travail</li>
                        <li>Fer à repasser</li>
                        <li>Sèche-cheveux</li>
                        <li>Cintres"</li>
                    </ul>
                </Collapse>

            </DetailsSection>

        </DetailsContainer>
    );
}