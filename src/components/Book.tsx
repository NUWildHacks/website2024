
import React from 'react';
import styled, { keyframes } from 'styled-components';


const glow = keyframes`
  0%, 100% {
    box-shadow: 0 100px 40px 10px rgba(255, 215, 0, 0.3),
                0 100px 80px 30px rgba(255, 215, 0, 0.3),
                0 100px 120px 60px rgba(255, 215, 0, 0.3),
  }
  25%, 75% {
    box-shadow: 0 0 60px 15px rgba(255, 215, 0, 0.3),
                0 0 100px 40px rgba(255, 215, 0, 0.3),
                0 0 140px 70px rgba(255, 215, 0, 0.3),

  }
  50% {
    box-shadow: 0 0 100px 20px rgba(255, 215, 0, 0.3),
                0 0 100px 50px rgba(255, 215, 0, 0.3),
                0 0 100px 80px rgba(255, 215, 0, 0.3),
                0 0 100px 10px rgba(255, 215, 0, 0.3),
                0 0 100px 10px rgba(255, 215, 0, 0.3);
  }
`;


interface BookProps {
  width?: string;
  height?: string;
  glow?: boolean;
  transform?: string;
  border?: string;
  backgroundSize?: string;
  padding?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  marginleft?: string;
}

interface TextProps{
  fontsize?: string;
}

const Book = styled.div<BookProps>`
  display: flex;
  justify-content: center;
  box-shadow: ${({ glow }) =>
  glow
    ? `0 0 40px 10px rgba(202, 168, 105, 0.5),
       0 0 80px 30px rgb(202, 168, 105, 0.5),
       0 0 120px 60px rgb(202, 168, 105, 0.5)`
    : '15px 15px 15px rgba(0,0,0,0.5)'};
  align-items: center;
  background-color: rgb(202, 168, 105, 0.9);
  color: black;
  width: ${({ width }) => width || '450px'};
  height: ${({ height }) => height || '350px'};
  border: ${({ border }) => border || '7px solid rgb(139, 1, 1, 0.9)'};
  border-radius: 10px;
  // box-shadow: 15px 15px 15px rgba(0,0,0,0.5);
  background-image: linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px);
  background-size: ${({ backgroundSize }) => backgroundSize || '2px 100%'};
  transform: ${({ transform }) => transform};
  padding: ${({ padding }) => padding};
  margin-left: ${({marginleft}) =>  marginleft};
  position: relative; 
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
`;


const Text = styled.h2<TextProps>`
    text-align: center;
    font-size: ${({ fontsize }) => fontsize || '16px'};
    padding-top: 50%;

`;

const Page = styled.div`
  width: 45%; 
  height: 100%;
  padding: 10%;
  text-align: center;
  background-color: rgb(237, 230, 216, 0.9);
  position: relative;
  overflow: hidden;
  border-radius: px;
  box-shadow: 15px 0px 12px rgba(0,0, 0, 0.3);

  &:first-child {
    border-right: 5px solid black;
    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      border-radius: 10px;
      pointer-events: none;
      transform: rotateY(180deg);
      box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
    }
  }

  &:last-child {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      border-radius: 10px;
      pointer-events: none;
      box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
    }
  }
`;


interface OpenBookProps {
  leftPageContent: React.ReactNode;
  rightPageContent: React.ReactNode;
  bookProps?: BookProps;
  textProps?: TextProps;
}

const OpenBook: React.FC<OpenBookProps> = ({ leftPageContent, rightPageContent, bookProps, textProps }) => {
  return (
    <>
    <Book {...bookProps}>
      <Page><Text {...textProps}>{leftPageContent} </Text></Page>
      <Page><Text {...textProps}>{rightPageContent}</Text></Page>
    </Book>
    </>
  );
};

export default OpenBook;
