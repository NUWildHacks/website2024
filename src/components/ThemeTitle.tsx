
import styled, { keyframes } from 'styled-components';




// Keyframes for the floating effect
const float = keyframes`
  0%, 100% {
    transform: translateY(-10);
  }
  50% {
    transform: translateY(0px);
  }
`;

const animateGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
    position: relative;
    padding-top: 50px;
    padding-left: 10%;
`;

// const DiagonalTextWrapper = styled.div<{ offset: number }>`
//   position: relative;
//   left: ${props => props.offset}px;
// `;

const AnimateCharacter = styled.h4`
  text-transform: uppercase;
  background-image: linear-gradient(-225deg, var(--lightgreen) 0%, var(--gold) 29%, var(--lightgreen) 67%, var(--gold) 100%);
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${animateGradient} 5s linear infinite;
  display: flex;
  flex-direction: column;
  font-size: 75px;
  text-shadow: 0 0 10px rgba(255,255,255,0.4), 
               0 0 20px rgba(255,255,255,0.3), 
               0 0 40px rgba(255,255,255,0.2);
`;


const ThemeTitle: React.FC = () => {
    return (
            <Container>
            <div id="row">
            <div>

                    <AnimateCharacter>Beyond</AnimateCharacter>
                    <AnimateCharacter>The Books</AnimateCharacter>
                    {/* <DiagonalTextWrapper offset={200}> {/* Adjust offset values as needed */}
                        {/* <AnimateCharacter>The Books</AnimateCharacter>
                    </DiagonalTextWrapper> */} 
                    {/* <DiagonalTextWrapper offset={300}>
                        <AnimateCharacter>Books</AnimateCharacter>
                    </DiagonalTextWrapper> */}
            </div>
            </div>
            </Container>
    );
    };

    export default ThemeTitle;
