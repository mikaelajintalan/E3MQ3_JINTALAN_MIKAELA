import React from 'react';
import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import HelloUser from './pages/helloUser';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/index' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/helloUser' component={HelloUser} />
      </Switch>
    </Router>
  );
}
<Footer />

export default App;