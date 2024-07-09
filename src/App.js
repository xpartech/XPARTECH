import './App.css';
import Navbar from './components/HomePage Components/NavBar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/AboutPage';
import Services from './components/pages/ServicesPage';
import Contact from './components/pages/ContactPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
