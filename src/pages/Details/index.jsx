import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Products from "../../data/logements.json";
import Collapse from "../../components/Collapse";
import Slideshow from "../../components/Slideshow";
import Tags from "../../components/Tags";
import Stars from "../../components/Stars";
import styled from "styled-components";
import { device } from "../../utils/style/Devices";
import colors from "../../utils/style/colors";
import "./Details.css";

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const DetailsSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 0 10px 0;
    padding: 6px 0 20px 0;
    border-radius: 25px;
    background-color: #fff;

    @media ${device.laptop} {
        justify-content: space-between;
        flex-wrap: wrap;
    }

    & article {
        @media ${device.laptop} {
            width: 48%;
        }
    }
`;

const InfosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0 0 0;

    @media ${device.laptop} {
        flex-wrap: nowrap;
        margin: 30px 0 0 0;
    }
`;

const AnnonceContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;

    & h1,
    h2,
    h3 {
        color: ${colors.primary};
    }

    & h1 {
        font-size: 18px;
        font-weight: normal;
        margin: 0;
        line-height: 26px;

        @media ${device.laptop} {
            font-size: 36px;
            line-height: 51px;
        }
    }

    & h2 {
        margin: 5px 0 0 0;
        font-size: 14px;
        font-weight: normal;
        line-height: 20px;

        @media ${device.laptop} {
            font-size: 18px;
            line-height: 25px;
        }
    }

    & h3 {
        font-size: 18px;
        font-weight: normal;
    }
`;

const HostContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 6px;

    @media ${device.laptop} {
        flex-direction: column-reverse;
        align-items: flex-end;
        width: 30%;
        margin: 0 0 10px 0;
    }
`;

const ProfilContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h3 {
        font-size: 12px;
        color: ${colors.primary};

        @media ${device.laptop} {
            font-size: 18px;
            line-height: 25px;
        }
    }

    & img {
        width: 32px;
        height: 32px;
        margin-left: 10px;
        border-radius: 30px;

        @media ${device.laptop} {
            width: 64px;
            height: 64px;
        }
    }
`;

const HostnameContainer = styled.div`
    width: min-content;
    text-align: right;
`;

export default function Details() {
    const params = useParams();
    const [annonce, setAnnonce] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        let getProduct = false;
        const product = Products.reduce((prev, cur) => {
            if (cur.id === params.id) getProduct = cur
            return getProduct;
        }, {});

        !product ? navigate("/404") : setAnnonce(product)
    }, []);

    const {title, location, tags, rating, host, equipments, description, pictures} = annonce

    return (

        equipments && (
        
        <DetailsContainer>

            <Slideshow picturesArray={pictures} />
            
            <InfosContainer>

                <AnnonceContainer>
                    <h1>{title}</h1>

                    <h2>{location}</h2>

                    <Tags tagsArray={tags} />
                </AnnonceContainer>

                <HostContainer>
                    <Stars starsNumber="5" rating={rating} />

                    <ProfilContainer>
                        <HostnameContainer>
                            <h3>{host.name}</h3>
                        </HostnameContainer>

                        <div>
                            <img src={host.picture} alt="alt text" />
                        </div>
                    </ProfilContainer>
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
        )
    )
}