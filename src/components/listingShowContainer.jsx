import { connect } from 'react-redux';
import { fetchListing } from '../actions/listingActions';
import { clearFilter } from '../actions/filterActions';
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
    clearFilter: () => dispatch(clearFilter())
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(ListingShow);
