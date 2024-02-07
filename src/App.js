import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/AboutMe';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import ContactMe from './Component/ContactMe';
import Projects from './Component/Projects';
import BlogComponent from './Component/BlogComponent.js';


function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact-me' element={<ContactMe />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Blog' element={<BlogComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
