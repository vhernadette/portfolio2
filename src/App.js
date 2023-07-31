import './App.css';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/pages/Home';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Navigate>
        <Route path="/" exact component={Home} />
      </Navigate>
      </Router>
    
    </div>
  );
}

export default App;


