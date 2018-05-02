import merge from 'lodash/merge';
import { RECEIVE_LISTINGS, RECEIVE_LISTING } from "../actions/listingActions.js";

const ListingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      let newState = merge({}, oldState, action.listings);
      return newState;
    case RECEIVE_LISTING:
        return merge({}, oldState, {[action.listing.listingKey]: action.listing});
    default:
      return oldState;
  }
};

export default ListingsReducer;
