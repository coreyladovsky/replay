import * as firebase from 'firebase';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const fetchListings = () => {
  firebase.database().ref("Listings/").once("value", (snapshot) => {
    debugger
  });
};
