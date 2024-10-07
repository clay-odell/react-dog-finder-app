import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import './App.css';

function App() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5001/dogs')
    .then(response => response.json())
    .then(data => setDogs(data));
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />}/>
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </Router>
  );
}

export default App;
