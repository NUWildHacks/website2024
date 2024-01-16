// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../styles';
import { Book, Book2 } from 'tabler-icons-react';

const Container = styled.div<{ open: boolean }>`
  margin-top: 16px;
  background: ${(props) => (props.open ? 'white' : '')};
  border-radius: 6px;
  padding: 3px;
`;

const Heading = styled.button<{ open: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(props) => (props.open ? 'var(--darkgreen)' : 'white')};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  transition: color 150ms ease-in-out;
  font-family: 'LinuxBiolinum';

  svg {
    width: 28px;
    height: 28px;
    align-self: flex-start;
    transition: transform 250ms ease-in-out;
    ${(props) => props.open && 'transform: rotate(15deg);'}
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
      background-color: ${(props) =>
        props.open ? 'var(--lightgreen)' : '#b0d9ff'};
      transform: scaleX(${(props) => (props.open ? 1 : 0)});
      transition: transform 250ms ease-out;
      transform-origin: ${(props) => (props.open ? '0% 50%' : '100% 50%')};
      border-radius: 2px;
    }
  }

  &:hover {
    color: ${(props) => (props.open ? 'var(--lightgreen)' : '#b0d9ff')};
  }

  ${mobile} {
    p {
      font-size: 20px;
    }

    svg {
      min-width: 24px;
      height: 24px;
    }
  }
`;

const Content = styled.p<{ open: boolean }>`
  margin-left: 32px;
  font-size: 18px;
  color: ${(props) => (props.open ? 'black' : 'white')};

  ${mobile} {
    margin-left: 28px;
  }

  span {
    color: var(--lightgreen);
    font-weight: 700;
  }

  a {
    color: var(--lightgreen);
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
    <Container open={open}>
      <Heading open={open} onClick={() => setOpen(!open)}>
        {open ? (
          <Book size={96} strokeWidth={1.5} color={'var(--darkgreen)'} />
        ) : (
          <Book2 size={96} strokeWidth={1.5} color={'white'} />
        )}
        <p>{q}</p>
      </Heading>
      {open && <Content open={open}>{children}</Content>}
    </Container>
  );
};

export default Question;
