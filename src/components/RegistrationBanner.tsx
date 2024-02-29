import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 32px;
`;

const TextContent = styled.div`
  width: 100%;
  max-width: 480px;
`;

const Title = styled.p`
  font-family: GentiumBookPlus;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  margin: 0;
`;

const Text = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 0;

  span {
    font-weight: 700;
  }
`;

export default function RegistrationBanner() {
  return (
    <Container>
      <TextContent>
        <Title>🧑‍💻 Registration closes TONIGHT, Feb 29. 🧑‍💻</Title>
        <Text>Don't miss out on this final opportunity!</Text>
      </TextContent>
      <Button
        href="https://dashboard.wildhacks.net/register"
        color="#8b0101"
        //disabled
        //color="#646464"
        style={{
          boxShadow: 'rgba(203, 69, 72, 1) 0px -4px 32px',
        }}
      >
        Register
      </Button>
    </Container>
  );
}
