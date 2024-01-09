// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../styles';

const Container = styled.div`
  margin: 16px 0;
`;

const Heading = styled.button<{ open: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${(props) => (props.open ? '#b0d9ff' : '#ffffff')};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;

  svg {
    width: 16px;
    height: 16px;
    transition: transform 250ms;
    ${(props) => props.open && 'transform: rotate(90deg);'}
  }

  p {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    &:after {
      display: block;
      content: '';
      margin-top: 1px;
      height: 4px;
      background-color: #b0d9ff;
      transform: scaleX(${(props) => (props.open ? 1 : 0)});
      transition: transform 250ms ease-out;
      transform-origin: ${(props) => (props.open ? '0% 50%' : '100% 50%')};
      border-radius: 2px;
    }
  }

  &:hover {
    color: #b0d9ff;
  }

  ${mobile} {
    p {
      font-size: 20px;
    }

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const Content = styled.p<{ open: boolean }>`
  margin-left: 32px;

  ${mobile} {
    margin-left: 28px;
  }

  span {
    color: #d2c7ff;
    font-weight: 700;
  }
`;

interface IQuestion {
  q: string;
  children: React.ReactNode;
}

export const Question: React.FC<IQuestion> = ({ q, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Heading open={open} onClick={() => setOpen(!open)}>
        <p>{q}</p>
      </Heading>
      {open && <Content open={open}>{children}</Content>}
    </Container>
  );
};

export default Question;
