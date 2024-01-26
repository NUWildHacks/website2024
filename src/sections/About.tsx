import MailingList from '../components/MailingList';
import wildhacksClass from '../assets/wildhacks-class.jpg';
import wildhacksGroup from '../assets/wildhacks-group.jpg';
import wildhacksOutside from '../assets/wildhacks-outside.jpg';
import bookshelf from '../assets/bookshelf.png';
import wildhacksFood from '../assets/wildhacks-food.jpg';
import wildhacksTeamPose from '../assets/wildhacks-team-pose.jpg';
import wildhacksTeamwork from '../assets/wildhacks-teamwork.jpg';
import { mobile } from '../styles';
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px 55px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  grid-auto-rows: minmax(200px, 200px);

  ${mobile} {
    padding: 100px 25px;
  }
`;

const Box1 = styled.div`
  border-radius: 8px;
  grid-column: 1;
  grid-row: 1 / 3;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${mobile} {
    display: none;
  }
`;

const Box2 = styled.div`
  border-radius: 8px;
  grid-column: 2;
  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${mobile} {
    display: none;
  }
`;

const Box3 = styled.div`
  border-radius: 8px;
  grid-column: 3;
  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${mobile} {
    display: none;
  }
`;

const Box4 = styled.div`
  background-color: var(--gold);
  border-radius: 8px;
  grid-column: 4;
  grid-row: 1 / 3;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    height: 95%;
    width: 90%;
    object-fit: cover;
  }
  ${mobile} {
    display: none;
  }
`;

const Text = styled.div`
  ${mobile} {
    grid-column: 1 / 5;
    grid-row: 1 / 4;
  }

  border-radius: 8px;
  grid-column: 2 / 4;
  grid-row: 2 / 4;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    div {
      border-radius: 8px;
      background-color: var(--beige);
    }

    p {
      color: var(--darkgreen);
      padding: 8px 30px;
      font-size: 18px;

      ${mobile} {
        font-size: larger;
      }

      span {
        color: var(--brown);
        font-weight: bold;
      }
    }
  }
`;

const Box5 = styled.div`
  border-radius: 8px;
  grid-column: 1;
  grid-row: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${mobile} {
    display: none;
  }
`;

const Mail = styled.div`
  background-color: var(--lightgreen);
  display: flex;
  border-radius: 8px;
  grid-column: 1 / 3;
  grid-row: 4;

  ${mobile} {
    grid-column: 1 / 5;
    grid-row: 4 / 5;
  }
`;

const MailContent = styled.div`
  border-radius: 8px;
  width: 100%;
  margin: 8px;
  background-color: var(--beige);
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MailHeading = styled.p`
  font-size: 28px;
  letter-spacing: 0.1rem;
  color: var(--darkgreen);
  font-family: GentiumBookPlus;
  margin: 8px 0;
  width: 100%;

  ${mobile} {
    font-size: 20px;
  }
`;

const Box6 = styled.div`
  border-radius: 8px;
  grid-column: 3;
  grid-row: 4;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${mobile} {
    display: none;
  }
`;

const Box7 = styled.div`
  border-radius: 8px;
  grid-column: 4;
  grid-row: 3 / 5;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${mobile} {
    display: none;
  }
`;

export default function About() {
  return (
    <Container id="about">
      <Box1>
        <img
          src={wildhacksClass}
          alt="WildHacks 2023 Open Classes Picture"
        ></img>
      </Box1>
      <Box2>
        <img src={wildhacksGroup} alt="WildHacks 2023 Group Picture"></img>
      </Box2>
      <Box3>
        <img
          src={wildhacksOutside}
          alt="WildHacks 2023 Team Outside Working Picture"
        ></img>
      </Box3>
      <Box4>
        <img src={bookshelf} alt="Bookshelf cartoon image"></img>
      </Box4>
      <Text>
        <div>
          <div>
            <p>
              WildHacks is Northwestern's overnight hackathon taking place
              in-person <span>April 5-7 2024</span>. As Northwestern's largest
              hackathon, WildHacks is an opportunity for students to learn
              programming skills and develop a final project in a collaborative
              and inclusive environment. Through workshops, mentorship, and
              prizes, WildHacks aims to be an inclusive event that welcomes
              students of all skill levels, majors, and backgrounds.
            </p>
          </div>
        </div>
      </Text>
      <Box5>
        <img
          src={wildhacksFood}
          alt="WildHacks 2023 Food Catering Picture"
        ></img>
      </Box5>
      <Mail>
        <MailContent>
          <MailHeading>Join the mailing list!</MailHeading>
          <MailingList />
        </MailContent>
      </Mail>
      <Box6>
        <img
          src={wildhacksTeamPose}
          alt="WildHacks 2023 Executive Team Picture"
        ></img>
      </Box6>
      <Box7>
        <img
          src={wildhacksTeamwork}
          alt="WildHacks 2023 Team Working Picture"
        ></img>
      </Box7>
    </Container>
  );
}
