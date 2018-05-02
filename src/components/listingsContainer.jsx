import React from 'react';
import { connect } from 'react-redux';
import { fetchListings,  fetchListing } from '../actions/listingActions';
import Listings from './listings';


const mapStateToProps = (state, ownProps) => {
  return {
    listings: state.listings
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    fetchListing: () => dispatch(fetchListing("-L2KvXIqFoxHjI9vl1gW")),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Listings);
