import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './components/pages/Home'
import About from './components/About/About'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
