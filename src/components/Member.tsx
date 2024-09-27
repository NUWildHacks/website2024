import styled from 'styled-components';
import { mobile } from '../styles';

const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 125px;
    width: auto;
    margin: 10px;
    transition: transform 0.2s ease-in-out;
    border-radius: 15px;
    ${mobile} {
      max-width: auto;
      height: 100px;
      margin: 0px;
    }
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

const Name = styled.p`
  font-size: 20px;
  color: var(--beige);
`;

const Description = styled.p`
  font-size: 15px;
  color: var(--beige);
`;

interface IMember {
  src: string;
  alt: string;
  name: string;
  description: string;
  h?: number;
}

export const Member: React.FC<IMember> = ({ src, alt, name, description }) => {
  return (
    <Container target="_blank" rel="noreferrer">
      <img src={src} alt={alt} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Container>
  );
};

export default Member;
