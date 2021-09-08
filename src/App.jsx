import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Card from './Components/Card';

import * as variables from './variables';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Attribution = styled.div`
    text-align: center;
    color: white;
    position: relative;
    top: 2.5rem; // 40px
`;

const Link = styled.a`
    color: white;
    transition: all ease 0.1s;

    :hover {
        color: ${variables.colors.textPrimarySoftRed};
        text-decoration: none;
    }
`;

function App() {
    return (
        <Container>
            <GlobalStyle />
            <Card />
            <Attribution>
                Challenge by{' '}
                <Link
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                >
                    Frontend Mentor
                </Link>
                . Coded by <Link href='#'>Rizky Putra Mahendra</Link>.
            </Attribution>
        </Container>
    );
}

export default App;
