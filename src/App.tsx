import Navbar from './components/NavBar';
import About from './sections/About';
import FAQ from './sections/FAQ';
import Sponsors from './sections/Sponsors';
import Footer from './components/Footer';
import Landing from './sections/Landing';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Sponsors />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
