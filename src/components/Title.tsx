import React from 'react';
import styled, { keyframes } from 'styled-components';

// Assuming the `float` and `textclip` animations are already defined

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const FloatingLetter = styled.span<{ $delay?: number }>` // TypeScript interface for props
  display: inline-block;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s; // Using transient prop
`;
// Define a TypeScript interface for props if needed
// For this specific case, since we're using the children prop (which is inherently part of React), 
// an additional interface may not be strictly necessary unless we're passing custom props

interface AnimateCharacterProps {
  children: string;
}

const AnimateCharacter: React.FC<AnimateCharacterProps> = ({ children }) => {
    const letters = children.split('').map((letter, index) => (
        <FloatingLetter key={index} $delay={0.1 * index}>
          {letter}
        </FloatingLetter>
      ));

  return <h4 style={{
    textTransform: 'uppercase',
    background: 'linear-gradient(-225deg, #91a762 0%, #ede6d8 29%, #caa869 67%, #ccd5ae 100%)',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '75px',
    padding: '3% 32%',
    display: 'inline-flex',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden'
  }}>{letters}</h4>;
};


export default AnimateCharacter;