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

  // const listings = firebase.database().ref().child("Listings");
  // const approved = firebase.database().ref().child("Approved");
  //
  // approved.on('child_added', (snap) => {
  //   listings.child(snap.key).once('value', listing => {
  //     return dispatch(receiveListing(listing.val()));
  //   });
  // });

};

export const fetchListing = (listingId) => dispatch => {
  let database = firebase.database();
  let ref = database.ref("Listings").child(listingId);
  ref.on('value', (snap) => {
    return dispatch(receiveListing(snap.val()));
  });
};
