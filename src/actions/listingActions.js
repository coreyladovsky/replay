import * as firebase from 'firebase';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const fetchListings = () => dispatch => {
  let database = firebase.database();
  let ref = database.ref("Listings");
  ref.on('value', (snap) => {
    return dispatch(receiveListings(snap.val()));
  });
};
