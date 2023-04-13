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
    const annonce = products.filter(annonce => annonce.id === id);
    const pictures = annonce[0].pictures;
    const title = annonce[0].title;
    const location = annonce[0].location;
    const tags = annonce[0].tags;
    const hostName = annonce[0].host.name;
    const hostPicture = annonce[0].host.picture;
    const rating = annonce[0].rating;
    const description = annonce[0].description;
    const equipments = annonce[0].equipments;

    //console.log("annonce : ", annonce)
    //console.log("equipment : ", equipments)
    // console.log("DETAIL pictures : ", pictures)
    
    // {annonce[0].rating.map((item, index) => <PictoStar key={item} tag={item} className="{index}" />)}

    return (
        
        <DetailsContainer>

            <Slideshow iimages={`${pictures}`} />

            <h1>{title}</h1>

            <h2>{location}</h2>

            <Tags tagsArray={tags} />

            <InfosContainer>

                <StarsContainer>
                    <PictoStar fillColor={rating >= 1 ? `${colors.primary}` : ""} />
                    <PictoStar fillColor={rating >= 2 ? `${colors.primary}` : ""} />
                    <PictoStar fillColor={rating >= 3 ? `${colors.primary}` : ""} />
                    <PictoStar fillColor={rating >= 4 ? `${colors.primary}` : ""} />
                    <PictoStar fillColor={rating >= 5 ? `${colors.primary}` : ""} />
                </StarsContainer>

                <HostContainer>
                    <h3>{hostName}</h3>

                    <div>
                        <img src={hostPicture} alt="alt text" />
                    </div>
                </HostContainer>

            </InfosContainer>
            
            <DetailsSection>
                <Collapse title="Description">
                    {description}
                </Collapse>

                <Collapse title="Équipements">
                    <ul>
                        {equipments.map((item) => <li key={item}>{item}</li> )}
                    </ul>
                </Collapse>

            </DetailsSection>

        </DetailsContainer>
    );
}