import { connect } from 'react-redux';
import { fetchListings } from '../actions/listingActions';
import Listings from './listings';

const checkFilter = (listing, filters) => {
  if(!listing.amenities) {
    return false;
  }

  for (let i = 0; i < filters.length; i++) {
    if(!listing.amenities.includes(filters[i]) ){
      return false;
    }
  }
  return true;
};

const mapStateToProps = (state, ownProps) => {
  let filters = [];
   Object.keys(state.filters).forEach( key => {
     if(state.filters[key]) {
       filters.push(key);
     }
   });


   let listings = Object.values(state.listings);
   if (filters.length !== 0) {
     let newlist = [];
     listings.forEach(listing => {
       if (checkFilter(listing, filters)) {
         newlist.push(listing);
       }
     });
     listings = newlist;
   }


  return {
    listings,
    filters
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    fetchListings: () => dispatch(fetchListings()),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Listings);
