import styled from 'styled-components';
import MemberBox from '../components/MemberBox';
import Member from '../components/Member';
import profilePic from '../assets/members/profilepic.jpg';

const Section = styled.div``;

const Container = styled.div`
  background-color: var(--darkgreen);
`;

export default function Team() {
  return (
    <Section id="team">
      <Container>
        <MemberBox title="OUR TEAM">
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
          <Member
            src={profilePic}
            alt="FName LName"
            name="FName"
            description="Team"
          />
        </MemberBox>
      </Container>
    </Section>
  );
}
