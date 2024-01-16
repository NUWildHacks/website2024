import styled from 'styled-components';

const Container = styled.div`
  // margin: 72px 16px;
  margin-bottom: 2px;
`;

const Title = styled.h3`
  text-align: left;
  padding-top: 0px;
  padding-left: 10px;
  // padding-right: 10px;
  // padding-bottom: 10px;
  font-size: 32px;
  color: var(--brown);
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-wrap: wrap;
  background-color: var(--beige);
  padding: 32px;
  border-radius: 12px;
`;

interface ISponsorBox {
  title: string;
  children: React.ReactNode;
}

export const SponsorBox: React.FC<ISponsorBox> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default SponsorBox;
