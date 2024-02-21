import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    position: relative;
    padding-top: 50px;
    padding-left: 10%;
    width: 600px;
`;

const Text = styled.p`
    font-size: 20px;
`;

const ThemeText: React.FC = () => {
    return (
            <Container>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
            </Container>
    );
    };

    export default ThemeText;
