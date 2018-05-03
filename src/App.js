import React, { Component } from "react";
import { init as firebaseInit } from "./firebase";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import configureStore from "./configureStore";
import "./css/App.css";
import ListingsContainer from "./components/listingsContainer";
import ListingShowContainer from "./components/listingShowContainer";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import { baseUrl } from "./index.js";
import ListingUserIndexContainer from "./components/listingUserIndexContainer";
import FilterFormContainer from "./components/filterFormContainer";

class App extends Component {
  constructor(props) {
    super(props);
    firebaseInit();
    this.store = configureStore();
  }

  componentDidMount() {
    let config = {
      apiKey: "AIzaSyCXI_kLNNSMMR-R_7uVvzy7x72K5FTnZuc",
      authDomain: "corey-replaylistings.firebaseapp.com",
      databaseURL: "https://corey-replaylistings.firebaseio.com",
      projectId: "corey-replaylistings",
      storageBucket: "corey-replaylistings.appspot.com",
      messagingSenderId: "763856852812"
    };
  }
  render() {
    return (
      <Provider store={this.store}>
        <BrowserRouter>
          <div>
            <Route path={baseUrl + "/*"} component={NavBar} />
            <Route exact path={baseUrl + "/"} component={FilterFormContainer} />
            <Switch>
              <Route
                exact
                path={baseUrl + "/Listings/:listingId"}
                component={ListingShowContainer}
              />
              <Route
                exact
                path={baseUrl + "/UserListings/:authorKey"}
                component={ListingUserIndexContainer}
              />
              <Route path={baseUrl + "/"} component={ListingsContainer} />
            </Switch>
            <Route
              exact
              path={baseUrl + "/Listings/:listingId"}
              component={Footer}
            />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
