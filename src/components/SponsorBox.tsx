import styled from 'styled-components';

const Container = styled.div`
  // margin: 72px 16px;
  max-width: 1200px;
  margin: 32px auto;
`;

const Title = styled.h2<{ $small?: boolean }>`
  text-align: center;
  padding-top: 0px;
  padding-left: 10px;
  font-size: ${({ $small }) => ($small ? '24px' : '32px')};
  color: var(--brown);
  font-family: GentiumBookPlus;
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
  small?: boolean;
  children: React.ReactNode;
}

export const SponsorBox: React.FC<ISponsorBox> = ({
  title,
  small,
  children,
}) => {
  return (
    <Container>
      <Title $small={small}>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default SponsorBox;
