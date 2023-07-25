import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
// import Search from './components/Search';
import Error from './components/Error';
import Movies from './components/Movies';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <>
    <Home />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Hero />} >
          </Route>
          <Route path="/Contact" element={<Contact />} >
          </Route>
          <Route path="/movie" element={<Movies />} >
          </Route>
          <Route path="/About" element={<About />} >
          </Route>
          <Route path="/*" element={<Error />} >
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
