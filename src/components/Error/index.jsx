import styled from 'styled-components';
import { device } from '../../utils/style/Devices';

const ErrorContainer = styled.section`
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
    
    & h1 {

    }

    & p {
      
    }

`

export default function Error() {

    return (
        <ErrorContainer>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <link>Retourner sur la page d’accueil</link>
        </ErrorContainer>
    );
}