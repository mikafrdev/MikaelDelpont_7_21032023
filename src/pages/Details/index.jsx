import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag';
import styled from 'styled-components';
import { device } from '../../utils/style/Devices';

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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

export default function Details() {

    return (
        <DetailsContainer>

            <Slideshow>


            </Slideshow>

            <h1>Paris center, on the romantic Canal Saint-Martin</h1>

            <h2>Paris, Île-de-France</h2>


            
            <DetailsSection>
                <Collapse
                    title="Description"
                    description="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
                />
                <Collapse
                    title="Équipements"
                    description="Climatisation
                    Wi-Fi
                    Cuisine
                    Espace de travail
                    Fer à repasser
                    Sèche-cheveux
                    Cintres"
                />
            </DetailsSection>

        </DetailsContainer>
    );
}