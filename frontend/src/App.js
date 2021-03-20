import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Friend from './pages/Friend';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'component={Friend} />
        <Redirect from='*' to='/' />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App; 
