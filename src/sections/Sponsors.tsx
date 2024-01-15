import SponsorBox from '../components/SponsorBox';
import Sponsor from '../components/Sponsor';

export default function Sponsors() {
  return (
    <SponsorBox title="OUR SPONSORS">
      <Sponsor src="/imc.png" alt="IMC" href="https://www.imc.com/us/" />
      <Sponsor
        src="/northwestern-cs.png"
        alt="Northwestern Computer Science"
        href="https://www.mccormick.northwestern.edu/computer-science/"
      />
      <Sponsor
        src="/deloitte.png"
        alt="Deloitte"
        href="https://www2.deloitte.com/us/en.html"
      />
      <Sponsor
        src="/spiderrock.png"
        alt="SpiderRock"
        href="https://www.spiderrock.net/"
      />
      <Sponsor src="/poatek.png" alt="POATEK" href="https://poatek.com/" />
      <Sponsor
        src="/thegarage.jpeg"
        alt="The Garage"
        href="https://thegarage.northwestern.edu/"
        // h={128}
      />
      <Sponsor
        src="/github.png"
        alt="GitHub"
        href="https://github.com/"
        // h={48}
      />
    </SponsorBox>
  );
}
