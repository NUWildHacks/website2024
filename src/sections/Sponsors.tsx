import SponsorBox from '../components/SponsorBox';
import Sponsor from '../components/Sponsor';
import imc from '../assets/imc.png';
import nucs from '../assets/northwestern-cs.png';
import deloitte from '../assets/deloitte.png';
import spiderrock from '../assets/spiderrock.png';
import poatek from '../assets/poatek.png';
import garage from '../assets/thegarage.jpeg';
import github from '../assets/github.png';
import styled from 'styled-components';

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
          <Sponsor src={imc} alt="IMC" href="https://www.imc.com/us/" />
          <Sponsor
            src={nucs}
            alt="Northwestern Computer Science"
            href="https://www.mccormick.northwestern.edu/computer-science/"
          />
          <Sponsor
            src={deloitte}
            alt="Deloitte"
            href="https://www2.deloitte.com/us/en.html"
          />
          <Sponsor
            src={spiderrock}
            alt="SpiderRock"
            href="https://www.spiderrock.net/"
          />
          <Sponsor src={poatek} alt="POATEK" href="https://poatek.com/" />
          <Sponsor
            src={garage}
            alt="The Garage"
            href="https://thegarage.northwestern.edu/"
            // h={128}
          />
          <Sponsor
            src={github}
            alt="GitHub"
            href="https://github.com/"
            // h={48}
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
