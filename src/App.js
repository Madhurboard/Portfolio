import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Hero />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
