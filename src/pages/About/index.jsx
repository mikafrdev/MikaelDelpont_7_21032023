import Banner from '../../components/Banner'
import BannerAbout from "../../assets/banner-about.jpg";
import Collapse from '../../components/Collapse'
import styled from 'styled-components'
import { device } from '../../utils/style/Devices';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 22px 0;
    border-radius: 25px;
    background-color: #FFF;

    @media ${device.tablet} {
        padding: 6px 0 20px 0;
    }
`

export default function About() {

    console.log({BannerAbout})
    return (
        <HomeContainer>
            <Banner image={BannerAbout} />
            <AboutSection>
                <Collapse
                    title="Fiabilité"
                    description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                />

                <Collapse
                    title="Respect"
                    description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />

                <Collapse
                    title="Service"
                    description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />

                <Collapse
                    title="Sécurité"
                    description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </AboutSection>
        </HomeContainer>
    );
}