// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../styles';
import { Book, Book2 } from 'tabler-icons-react';

const Container = styled.div<{ open: boolean }>`
  margin: 16px 0;
  background: ${(props) => (props.open ? 'var(--beige)' : '')};
  border-radius: 6px;
  padding: 8px;
  max-width: 95%;

  ${mobile} {
    max-width: 90%;
  }
`;

const Heading = styled.button<{ open: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(props) => (props.open ? 'var(--darkgreen)' : 'var(--beige)')};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  transition: color 150ms ease-in-out;
  font-family: GentiumBookPlus;

  svg {
    min-width: 28px;
    min-height: 28px;
    width: 28px;
    height: 28px;
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
        props.open ? 'var(--lightgreen)' : 'var(--lightgreen)'};
      transform: scaleX(${(props) => (props.open ? 1 : 0)});
      transition: transform 250ms ease-out;
      transform-origin: ${(props) => (props.open ? '0% 50%' : '100% 50%')};
      border-radius: 2px;
    }
  }

  &:hover {
    color: ${(props) => (props.open ? 'var(--lightgreen)' : 'var(--gold)')};
  }

  ${mobile} {
    p {
      font-size: 20px;
    }

    svg {
      min-width: 24px;
      min-height: 24px;
      width: 24px;
      height: 24px;
    }
  }
`;

const Content = styled.p<{ open: boolean }>`
  margin-left: 32px;
  font-size: 18px;
  color: ${(props) => (props.open ? 'black' : 'white')};
  font-family: LinuxBiolinum;

  ${mobile} {
    margin-left: 28px;
  }

  span {
    color: var(--darkgreen);
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
