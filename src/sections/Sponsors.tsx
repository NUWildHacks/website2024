import styled from 'styled-components';
import SponsorBox from '../components/SponsorBox';
import Sponsor from '../components/Sponsor';
import logoNUCS from '../assets/sponsors/nucs.png';
import logoAccenture from '../assets/sponsors/accenture.png';
import logoDeloitte from '../assets/sponsors/deloitte.png';
import logoTheGarage from '../assets/sponsors/the-garage.png';

const Section = styled.div`
  padding-top: 100px;
`;

const Container = styled.div`
  background-color: #ede6d8;
  padding: 45px 16px 75px;
  margin: -1px;
`;

const Waveb = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;

    .shape-fill {
      fill: var(--beige);
    }
  }
`;

const Wavet = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;

    .shape-fill {
      fill: var(--beige);
    }
  }
`;

export default function Sponsors() {
  return (
    <Section id="sponsors">
      <Waveb>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </Waveb>
      <Container>
        <SponsorBox title="OUR SPONSORS">
          <Sponsor
            src={logoNUCS}
            alt="NUCS"
            href="https://www.accenture.com/us-en"
            h={72}
          />
          <Sponsor
            src={logoAccenture}
            alt="Accenture"
            href="https://www.accenture.com/us-en"
            h={128}
          />
          <Sponsor
            src={logoDeloitte}
            alt="Deloitte"
            href="https://www2.deloitte.com/us/en.html"
            h={64}
          />
          <Sponsor
            src={logoTheGarage}
            alt="The Garage"
            href="https://www.thegarage.northwestern.edu/"
            h={128}
          />
        </SponsorBox>
      </Container>
      <Wavet>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </Wavet>
    </Section>
  );
}
