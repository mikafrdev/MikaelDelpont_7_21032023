import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag';
import Star from "../../components/Pictos";
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

const TagsContainer = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 10px 0 0 0;

    @media ${device.tablet} {
        
    }

    & li  {
    margin-right: 10px;
    padding: 4px 28px;
    border-radius: 5px;
    font-size: 10px;
    background-color: #FF6060;
    color: #FFF;

    
    @media ${device.tablet} {
        
    }
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

    & li span.star {
        display: block;
        width: 20px;
        height: 20px;
        background: url(${Star}) no-repeat;
        
    }

    & .star svg path {
        display: block;
        width: 20px;
        height: 20px;
        background: url(${Star}) no-repeat
        fill: red;
        stroke: red;
        
    }

    & li img.active {
        fill: ${colors.primary};
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

    return (
        <DetailsContainer>

            <Slideshow>


            </Slideshow>

            <h1>Paris center, on the romantic Canal Saint-Martin</h1>

            <h2>Paris, Île-de-France</h2>

            <TagsContainer>
                <Tag>Cosy</Tag>
                <Tag>Canal</Tag>
                <Tag>Paris 10</Tag>
            </TagsContainer>

            <InfosContainer>

                <StarsContainer>
                    <li>
                        <Star fillColor={`${colors.primary}`} />
                    </li>
                    <li>
                        <Star />
                    </li>
                </StarsContainer>

                <HostContainer>
                    <h3>
                        Alexandre Dumas
                    </h3>

                    <div>
                        <img 
                            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
                            alt="alt text"
                            />
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