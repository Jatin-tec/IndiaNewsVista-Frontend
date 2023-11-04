import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Route and Routes
import Category from './Pages/Category';
import Contact from './Pages/Contact';
import NavBar from './Pages/NavBar';
import Slider from './Pages/Slider';

function App() {
  return (
    <Router> {/* Wrap your Routes with Router */}
      <>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/about" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
