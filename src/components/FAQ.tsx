import React from 'react';
import styled from 'styled-components';
import Question from './Question';

const FAQContainer = styled.div`
  background-color: var(--red);
  padding: 1rem;
`;

export const FAQ: React.FC = () => {
  return (
    <FAQContainer>
      <Question q="b">A</Question>
      <Question q="c">A</Question>
      <Question q="b">A</Question>
      <Question q="c">A</Question>
      <Question q="b">A</Question>
      <Question q="c">A</Question>
    </FAQContainer>
  );
};

export default FAQ;
