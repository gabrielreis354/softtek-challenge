import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Teste from './assets/components/Test.jsx';

import './App.scss'; 

function App() { 

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Teste />} />
            </Routes>        
        </Router>
    ); 
}
 export default App;