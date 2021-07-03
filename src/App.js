import React from 'react';
import "./App.css";
import Homepage from './components/homepage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar';
import AddEvent from './components/addEvent';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Homepage />
          </Route>
          <Route path="/add">
            <AddEvent />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
