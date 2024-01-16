import Navbar from './components/NavBar';
import About from './sections/About';
import FAQ from './sections/FAQ';
import Sponsors from './sections/Sponsors';
import Footer from './components/Footer';
import Landing from './sections/Landing';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Landing />
      <About />
      <Sponsors />
      <FAQ />
      <Footer />
    </Container>
  );
}

export default App;
