import styled from 'styled-components';
import { mobile } from '../styles';

const Container = styled.a<{ h?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: ${(props) => props.h || 85}px;
    transition: transform 0.2s ease-in-out;
    ${mobile} {
      max-width: 100%;
      height: auto;
      height: ${(props) => props.h || 64}px;
    }
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

interface ISponsor {
  href: string;
  src: string;
  title: string;
  h?: number;
}

export const Sponsor: React.FC<ISponsor> = ({ href, src, title, h }) => {
  return (
    <Container href={href} target="_blank" rel="noreferrer" h={h} title={title}>
      <img src={src} alt={title} />
    </Container>
  );
};

export default Sponsor;
