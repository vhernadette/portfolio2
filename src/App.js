import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDisplay />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        </Router>
       <Footer />
        
       

    
    </div>
  );
}

export default App;


