import React from 'react';

import Login from './Pages/Login';
import Dashboard from './Dashboard';
import Product from './Productpage';
import Reports from './Reports';
import User from './User';
import Expenses from './Expenses';

import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
     <Router>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Product" element={<Product/>}/>
    <Route path="/Reports" element={<Reports/>}/>
    <Route path="/User" element={<User/>}/>
    <Route path="/Expenses" element={<Expenses/>}/>


    </Routes>
     </Router>
      
    
  );
}

export default App;
