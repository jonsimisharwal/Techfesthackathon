import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import Dashboard from './Dashboard';  // Ensure the import path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />  {/* Ensure you are passing a JSX element */}
      </Routes>
    </Router>
  );
}

export default App;

