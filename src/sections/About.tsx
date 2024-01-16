import MailingList from '../components/MailingList';
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
  background-color: var(--gold);
  border-radius: 10px;
  grid-column: 1;
  grid-row: 1 / 3;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 95%;
    width: 90%;
    object-fit: cover;
    border-radius: 10px;
  }

  ${mobile} {
    display: none;
  }
`;

const Box2 = styled.div`
  background-color: var(--beige);
  border-radius: 10px;
  grid-column: 2;
  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 90%;
    width: 90%;
    object-fit: cover;
    border-radius: 10px;
  }

  ${mobile} {
    display: none;
  }
`;

const Box3 = styled.div`
  background-color: var(--red);
  border-radius: 10px;
  grid-column: 3;
  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 90%;
    width: 90%;
    object-fit: cover;
    border-radius: 10px;
  }

  ${mobile} {
    display: none;
  }
`;

const Box4 = styled.div`
  background-color: var(--gold);
  border-radius: 10px;
  margin-bottom: -30px;
  grid-column: 4;
  grid-row: 1 / 3;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 95%;
    width: 90%;
    object-fit: cover;
    border-radius: 15px;
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

  background-color: var(--gold);
  border-radius: 10px;
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
      width: 95%;
      height: 90%;
      border-radius: 10px;
      background-color: var(--beige);

      ${mobile} {
        width: 90%;
        height: 90%;
      }
    }

    p {
      color: var(--darkgreen);
      padding: 10px 30px;
      font-weight: bold;

      ${mobile} {
        font-size: larger;
      }

      span {
        color: var(--brown);
      }
    }
  }
`;

const Heading = styled.p`
  text-decoration: underline;
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: 0.1rem;
  color: var(--darkgreen);

  ${mobile} {
    font-size: 20px !important;
  }
`;

const Box5 = styled.div`
  background-color: var(--beige);
  border-radius: 10px;
  grid-column: 1;
  grid-row: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 90%;
    width: 90%;
    object-fit: cover;
    border-radius: 10px;
  }

  ${mobile} {
    display: none;
  }
`;

const Mail = styled.div`
  background-color: var(--lightgreen);
  border-radius: 10px;
  grid-column: 1 / 3;
  grid-row: 4;

  ${mobile} {
    grid-column: 1 / 5;
    grid-row: 4 / 5;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      width: 95%;
      height: 85%;
      border-radius: 10px;
      background-color: var(--beige);
      display: flex;
      align-items: start;
      justify-content: space-evenly;

      & > * {
        padding-left: 30px;
      }
    }
  }
`;

const Box6 = styled.div`
  background-color: var(--gold);
  border-radius: 10px;
  grid-column: 3;
  grid-row: 4;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 90%;
    width: 90%;
    object-fit: cover;
    border-radius: 10px;
  }

  ${mobile} {
    display: none;
  }
`;

const Box7 = styled.div`
  background-color: var(--gold);
  border-radius: 10px;
  margin-top: 30px;
  grid-column: 4;
  grid-row: 3 / 5;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 93%;
    width: 90%;
    object-fit: cover;
    border-radius: 10px;
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
          src="src/assets/WildhacksClass.JPG"
          alt="WildHacks 2023 Open Classes Picture"
        ></img>
      </Box1>
      <Box2>
        <img
          src="src/assets/WildhacksGroup.JPG"
          alt="WildHacks 2023 Group Picture"
        ></img>
      </Box2>
      <Box3>
        <img
          src="src/assets/WildhacksOutside.JPG"
          alt="WildHacks 2023 Team Outside Working Picture"
        ></img>
      </Box3>
      <Box4>
        <img src="src/assets/bokshelf.png" alt="Bookshelf cartoon image"></img>
      </Box4>
      <Text>
        <div>
          <div>
            <Heading>About</Heading>
            <p>
              WildHacks is Northwestern's overnight Hackathon taking place
              in-person <span>April 15-16 2023</span>. As Northwestern's largest
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
          src="src/assets/WildhacksFood.JPG"
          alt="WildHacks 2023 Food Catering Picture"
        ></img>
      </Box5>
      <Mail>
        <div>
          <div>
            <Heading>Sign up for mailing list:</Heading>
            <MailingList />
          </div>
        </div>
      </Mail>
      <Box6>
        <img
          src="src/assets/WildhacksTeamPose.JPG"
          alt="WildHacks 2023 Executive Team Picture"
        ></img>
      </Box6>
      <Box7>
        <img
          src="src/assets/WildhacksTeamwork.JPG"
          alt="WildHacks 2023 Team Working Picture"
        ></img>
      </Box7>
    </Container>
  );
}
