import styled from 'styled-components';
import wood from '../assets/wood.png';
import { darken } from 'polished';
import { FaLeaf } from 'react-icons/fa';

interface BookProps {
  size: number;
  width: number;
  color: string;
}

interface ShelfProps {
  width: number;
  rightPosition?: number;
  leftPosition?: number;
}

interface BookContainerProps {
  topPosition: number;
  rightPosition?: number;
  leftPosition?: number;
}

interface IvyIconProps {
  topPosition: number;
  leftPosition?: number;
  rightPosition?: number;
}

const Container = styled.div`
  min-height: 750px;
  margin-top: 0px;
  position: relative;
  background: var(--darkgreen);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: LinuxBiolinum;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 65px;
  font-family: LinuxBiolinum;
  margin: 0px;
  text-align: center;
  text-shadow:
    0 0 10px #91a762,
    0 0 20px #91a762,
    0 0 30px #91a762,
    0 0 40px #91a762;
`;

const DateLocation = styled.p`
  font-size: 24px;
  margin-top: 0px;
  text-align: center;
`;

const Bookshelf = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-end;
`;

const BookshelfHorizontal = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
`;

const Shelf = styled.div<ShelfProps>`
  background-image: url(${wood});
  background-size: cover;
  background-repeat: no-repeat;
  height: 40px;
  width: ${({ width }) => width}px;
  position: relative;
  right: ${({ rightPosition }) => rightPosition}px;
  left: ${({ leftPosition }) => leftPosition}px;
  border-radius: 15px;
`;

const BookContainer = styled.div<BookContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  position: absolute;
  top: ${({ topPosition }) => topPosition}px;
  right: ${({ rightPosition }) => rightPosition}px;
  left: ${({ leftPosition }) => leftPosition}px;
  margin-left: 0px;
`;

const Book = styled.div<BookProps>`
  height: ${({ size }) => size + 'px'};
  width: ${({ width }) => width + 'px'};
  background-color: ${({ color }) => color};
  border-radius: 5px;
  position: relative;
  box-shadow: inset -3px 0 3px rgba(0, 0, 0, 0.3);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px; // The width of the spine
    background-color: ${({ color }) => darken(0.2, color)};
    border-radius: 5px 0 0 5px;
  }
`;

const IvyIcon = styled(FaLeaf)<IvyIconProps>`
  position: absolute;
  top: ${({ topPosition }) => topPosition}px;
  left: ${({ leftPosition }) => leftPosition}px;
  right: ${({ rightPosition }) => rightPosition}px;
  color: green;
  font-size: 24px; // Adjust the size as needed
`;

export const Landing: React.FC = () => {
  return (
    <Container>
      <BookContainer topPosition={70} rightPosition={0}>
        <Bookshelf>
          <Book size={150} width={35} color="#8b0101" />
          <Book size={130} width={35} color="#deb887" />
          <Book size={120} width={35} color="#a0522d" />
          <Book size={160} width={35} color="#91a762" />
        </Bookshelf>
        <Shelf width={210} rightPosition={-10}></Shelf>
      </BookContainer>

      <BookContainer topPosition={480} leftPosition={0}>
        <Bookshelf>
          <Book size={150} width={35} color="#8b0101" />
          <Book size={130} width={35} color="#deb887" />
          <Book size={160} width={35} color="#91a762" />
          <Book size={120} width={35} color="#a0522d" />
        </Bookshelf>
        <Shelf width={210} leftPosition={-10}></Shelf>
      </BookContainer>

      <BookContainer topPosition={60} leftPosition={0}>
        <BookshelfHorizontal>
          <IvyIcon topPosition={0} leftPosition={170}></IvyIcon>
          <IvyIcon topPosition={30} leftPosition={200}></IvyIcon>
          <IvyIcon topPosition={60} leftPosition={230}></IvyIcon>
          <Book size={30} width={100} color="#8b0101" />
          <Book size={30} width={150} color="#91a762" />
          <Book size={30} width={200} color="#ede6d8" />
          <IvyIcon topPosition={90} leftPosition={30}></IvyIcon>
          <IvyIcon topPosition={90} leftPosition={185}></IvyIcon>
          {/* <IvyIcon topPosition={90} leftPosition={215}></IvyIcon>
        <IvyIcon topPosition={90} leftPosition={240}></IvyIcon> */}
        </BookshelfHorizontal>
        <Shelf width={300} leftPosition={-10}></Shelf>
      </BookContainer>

      <BookContainer topPosition={500} rightPosition={0}>
        <BookshelfHorizontal>
          <Book size={30} width={100} color="#ede6d8" />
          <Book size={30} width={150} color="#caa869" />
          <Book size={30} width={170} color="#91a762" />
          <Book size={30} width={200} color="#8b0101" />
          <IvyIcon topPosition={0} leftPosition={170}></IvyIcon>
          <IvyIcon topPosition={90} leftPosition={185}></IvyIcon>
          <IvyIcon topPosition={120} leftPosition={305}></IvyIcon>
          <IvyIcon topPosition={30} leftPosition={230}></IvyIcon>
        </BookshelfHorizontal>
        <Shelf width={400} rightPosition={-90}></Shelf>
      </BookContainer>

      <DateLocation>April 5 - 7 2024 in Evanston, IL</DateLocation>
      <Title>WILDHACKS 2024</Title>

      <Bookshelf></Bookshelf>
    </Container>
  );
};

export default Landing;
