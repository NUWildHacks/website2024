import { instagram, linkedin } from '../variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { mobile } from '../styles';

const BeigeBook = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  margin-top: 80px;

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
  margin-top: -2px;
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
  align-items: baseline;
  min-height: 60px;
  width: 100%;
  padding: 0 50px;
  background-color: var(--brown);
  width: 100vw;

  ${mobile} {
    padding: 0 10px;
    margin-top: -2px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  ${mobile} {
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  img {
    width: 60px;
    margin-right: 20px;
    padding: 5px;
    background-color: var(--beige);
    border-radius: 10px;

    ${mobile} {
      float: left;
      width: 40px;
      margin-right: 5px;
    }
  }

  p {
    font-weight: bold;
    font-size: 30px;

    ${mobile} {
      font-size: 20px;
      white-space: nowrap;
    }
  }
`;

const Right = styled.div`
  margin-bottom: 20px;

  ${mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  & > a {
    font-size: 25px;

    ${mobile} {
      font-size: 18px;
      margin-right: 5px;
    }
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

      ${mobile} {
        font-size: 35px;
      }
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
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
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
