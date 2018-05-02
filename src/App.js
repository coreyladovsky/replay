import React, { Component } from "react";
import { init as firebaseInit } from "./firebase";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
// import ReduxThunk from 'redux-thunk';
// import logger from 'redux-logger';
import configureStore from "./configureStore";
// import reducers from './reducers';
import "./App.css";
import ListingsContainer from "./components/listingsContainer";
import NavBar from "./components/nav";

class App extends Component {
  constructor(props) {
    super(props);
    firebaseInit();
    this.store = configureStore();
  }
  //
  componentDidMount() {
    let config = {
      apiKey: "AIzaSyCXI_kLNNSMMR-R_7uVvzy7x72K5FTnZuc",
      authDomain: "corey-replaylistings.firebaseapp.com",
      databaseURL: "https://corey-replaylistings.firebaseio.com",
      projectId: "corey-replaylistings",
      storageBucket: "corey-replaylistings.appspot.com",
      messagingSenderId: "763856852812"
    };
    // firebase.initializeApp(config);
    // let database = firebase.database();
  }
  render() {
    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
      <Provider store={this.store}>
        <BrowserRouter>
          <div>
          <Route path="/*" component={NavBar}/>
          <Switch>
            <Route exact path="/" component={ListingsContainer} />
            <Route exact path="/Listings/:listingId" component={ListingsContainer} />
          </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
