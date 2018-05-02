import * as firebase from 'firebase';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

export const fetchListings = () => dispatch => {
  let database = firebase.database();
  let ref = database.ref("Listings");
  ref.on('value', (snap) => {
    return dispatch(receiveListings(snap.val()));
  });
};

export const fetchListing = (listingId) => dispatch => {
  let database = firebase.database();
  let ref = database.ref("Listings").child(listingId);
  ref.on('value', (snap) => {
    return dispatch(receiveListing(snap.val()));
  });
};
