import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
=======
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
>>>>>>> fa6b9a7bed65788547351815b5b97ff0f2c613f5
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
<<<<<<< HEAD
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
=======
        <Routes>
          <Route path='/' exact component={<Home/>} />
          <Route path='/reports' component={<Reports/>} />
          <Route path='/products' component={<Products/>} />
        </Routes>
>>>>>>> fa6b9a7bed65788547351815b5b97ff0f2c613f5
      </Router>
    </>
  );
}

export default App;
