import Navbar from './components/NavBar';
import About from './sections/About';
import FAQ from './sections/FAQ';
import Sponsors from './sections/Sponsors';
import Footer from './components/Footer';
import Landing from './sections/Landing';
import styled from 'styled-components';
import Theme from './sections/Theme';

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Landing />
        <About />
        <Theme />
        <Sponsors />
        <FAQ />
        <Footer />
      </Container>
    </>
  );
}

export default App;
