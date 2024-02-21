
import styled, { keyframes } from 'styled-components';
import OpenBook from '../components/Book.tsx'
import book from '../assets/landing/book.png'
import ThemeTitle from '../components/ThemeTitle.tsx'
import wood from '../assets/landing/wood.png'
import ThemeText from '../components/ThemeText.tsx'


const Container = styled.div`
  height: 700px;
  background-color: #654221
  background-size: cover;
  display: flex;
  justify-content: center;
  margin-right: 10%;
`;

const WordContainer = styled.div`
`;

const BookContainer = styled.div`
`;


const Theme: React.FC = () => {
  return (
    <Container id="theme">
    
    <WordContainer> 
      <ThemeTitle />
      <ThemeText />
    </WordContainer>

      {/* <FloatingText>Beyond The Books</FloatingText>
      <BookImage src={book} alt="Open Book"/> */}
      <BookContainer> 
      <OpenBook
       
       leftPageContent="" 
       rightPageContent=""
       bookProps={{
         width: '100px',
         height: '70px',
         border: '3px solid var(--lightgreen)',
         transform: 'rotate(10deg)', 
         top: '0px',
         left: '300px',
         right: "0px",
         glow: false,

       }} 
       
       textProps = {{
        fontsize: '4px'
        }}
        />
     
      <OpenBook
       
       leftPageContent="Wild" 
       rightPageContent="Hacks"
       bookProps={{
         width: '70px',
         height: '50px',
         border: '2px solid var(--red)',
         transform: 'rotate(-30deg)', 
         top: '0px',
         left: '0px',
         right: "50px",
         glow: false,
         padding: '2px'
       }} 

       textProps = {{
        fontsize: '10px'
        }}
       />
       <OpenBook
       
       leftPageContent="Wild" 
       rightPageContent="Hacks"
       bookProps={{
         width: '70px',
         height: '50px',
         border: '4px solid var(--red)',
         transform: 'rotate(40deg)', 
         top: '550px',
         left: '800px',
         right: "50px",
         glow: false,
         padding: '2px'
       }} 

       textProps = {{
        fontsize: '10px'
        }}
       />
        <OpenBook
       
       leftPageContent="Wild" 
       rightPageContent="Hacks"
       bookProps={{
         width: '150px',
         height: '100px',
         border: '2px solid var(--red)',
         transform: 'rotate(-20deg)', 
         top: '0px',
         left: '900px',
         right: "0px",
         glow: false,
         padding: '2px'
       }} 

       textProps = {{
        fontsize: '10px'
        }}
       />

      <OpenBook
       
       leftPageContent="Wild" 
       rightPageContent="Hacks"
       bookProps={{
         width: '100px',
         height: '70px',
         border: '3px solid var(--lightgreen)',
         transform: 'rotate(-20deg)', 
         top: '350px',
         left: '0px',
         glow: false,
         padding: '2px'
       }} 

       textProps = {{
        fontsize: '10px'
        }}
       />

        <OpenBook 
        leftPageContent={"Wild"}
        rightPageContent={"Hacks"}
        bookProps={{
          glow: true,
          marginleft: '300px', 
          top: "-150px"
        }}
        textProps = {{
          fontsize: '40px'
          }}
      />

      </BookContainer>
     
    </Container>
  );
};

export default Theme;
