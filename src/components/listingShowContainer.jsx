import React from 'react';
import { connect } from 'react-redux';
import { fetchListing } from '../actions/listingActions';
import ListingShow from './listingShow';


const mapStateToProps = (state, ownProps) => {
  return {
    listing: Object.values(state.listings)
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(ListingShow);
