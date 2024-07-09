import './App.css';
import Navbar from './components/HomePage Components/NavBar/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
