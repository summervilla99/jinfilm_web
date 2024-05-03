// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Artist1 from './Artist1';
import Artist2 from './Artist2';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/artist1" element={<Artist1 />} />
        <Route path="/artist2" element={<Artist2 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
