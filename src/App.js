import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Alert from './pages/alert';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/index' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/alert' component={Alert} />
      </Switch>
    </Router>
  );
}

export default App;