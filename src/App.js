import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/movies' element={<Movies/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
