import merge from 'lodash/merge';
import { RECEIVE_LISTINGS } from "../actions/listingActions.js";

const ListingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      let newState = merge({}, oldState, action.listings);
      return newState;

    default:
      return oldState;
  }
};

export default ListingsReducer;
