import React from 'react';
import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import HelloUser from './pages/helloUser';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/index' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/helloUser' component={HelloUser} />
      </Switch>
      <footer>
          &copy; 2021 by Mikaela L. Jintalan BSCS-32E1.
      </footer>
    </Router>  
  );
}

export default App;