import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
