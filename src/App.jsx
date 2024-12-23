import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import { Home, About, Resume, Contact } from './pages'; // Removed Projects import

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
