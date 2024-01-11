import { instagram, facebook } from '../variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const BeigeBook = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;

    path {
      fill: var(--beige);
    }
  }
`;

const Beige = styled.div`
  background-color: var(--beige);
  height: 100px;
  margin-bottom: -130px;
`;

const BrownBook = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;

    path {
      fill: var(--brown);
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  padding: 0 50px;
  background-color: var(--brown);
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    padding-right: 20px;
  }

  p {
    font-weight: bold;
    font-size: 30px;
  }
`;

const Right = styled.div`
  margin-bottom: 20px;
  & > a {
    font-size: 25px;
  }
`;

const Socials = styled.div`
  a {
    float: right;
    background-color: var(--beige);
    color: var(--brown);
    border-radius: 20%;
    padding: 3px;
    margin: 5px;

    & > * {
      font-size: 25px;
      text-align: center;
    }

    &:hover {
    }
  }
`;

export default function Footer() {
  return (
    <>
      <BeigeBook>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"></path>
        </svg>
      </BeigeBook>
      <Beige />
      <BrownBook>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"></path>
        </svg>
      </BrownBook>
      <Container>
        <Left>
          <img src="./wildhacks2024.svg" alt="WildHacks 2024 Footer Logo" />
          <p>WildHacks 2024</p>
        </Left>
        <Right>
          <Socials>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
          </Socials>
          <a href="mailto:wildhacks@northwestern.edu">
            wildhacks@northwestern.edu
          </a>
        </Right>
      </Container>
    </>
  );
}
