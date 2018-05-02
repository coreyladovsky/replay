import React from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../actions/listingActions';
import Listings from './listings';


const mapStateToProps = (state, ownProps) => {
  return {
    listings: state.listings
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    fetchListings: () => dispatch(fetchListings())
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Listings);
