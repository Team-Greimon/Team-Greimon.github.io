import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './layouts/Home';
import { Switch, Route } from 'react-router-dom'
import NotFound from './layouts/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import fs from 'fs'

function App() {
  return (
    <>
      <Switch>
        <Route render={() => <Home />} />
      </Switch>
    </>
  );
}

export default App;
