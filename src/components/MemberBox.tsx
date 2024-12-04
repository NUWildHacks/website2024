import styled from 'styled-components';
import { mobile } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const Container = styled.div`
  margin-bottom: 2px;
  background-color: var(--dark green);
  margin: 50px;
  border-radius: 15px;
  padding-bottom: 50px;
  padding-left: 150px;
  padding-right: 150px;
  ${mobile} {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const Title = styled.h2`
  text-align: left;
  padding-left: 0px;
  padding-bottom: 30px;
  font-size: 32px;
  color: var(--gold);
  font-family: GentiumBookPlus;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 50px;
  row-gap: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const FontContainer = styled.div`
  padding: 10px;
`;

interface IMemberBox {
  title: string;
  children: React.ReactNode;
}

export const MemberBox: React.FC<IMemberBox> = ({ title, children }) => {
  return (
    <Container>
      <TitleContainer>
        <FontContainer>
          <FontAwesomeIcon icon={faBookmark} size="2x" color="var(--red)" />
        </FontContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Content>{children}</Content>
    </Container>
  );
};

export default MemberBox;
