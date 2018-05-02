import React from 'react';
import { connect } from 'react-redux';
import { fetchListing } from '../actions/listingActions';
import ListingShow from './listingShow';


const mapStateToProps = (state, ownProps) => {
  let listing = state.listings[ownProps.match.params.listingId];
  return {
    listing
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(ListingShow);
