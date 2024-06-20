import Firstsection from './components/Firstsection';
import ContactSection from './components/Contactform'; // Keep this import
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
// Remove the duplicate import
// import ContactSection from './ContactForm';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Firstsection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>    
      <Footer/>
    </>
  );
}

export default App;
