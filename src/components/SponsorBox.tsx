import styled from 'styled-components';

const Container = styled.div`
  padding: 16px 0;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 16px;
  color: #8b0101;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  background-color: #ffffff;
  box-shadow: 0 0 16px #ffffff;
  padding: 16px;
  border-radius: 12px;
`;

interface ISponsorBox {
  title: string;
  children: React.ReactNode;
}

export const SponsorBox: React.FC<ISponsorBox> = ({ title, children }) => {
  return (
    <Container>
      <Title>— {title} —</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default SponsorBox;
