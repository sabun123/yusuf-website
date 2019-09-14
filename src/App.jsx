import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import HomePage from './homepage';

const App = () => (
  <div className="App">
    <HomePage />
  </div>
);

export default hot(module)(App);
