import { FRONT_FILTER, CLEAR_FILTER } from "../actions/filterActions";
import merge from "lodash/merge";

const state = {"noFee": false, "convertible": false, "gym": false, "petFriendly": false, "laundry": false, "doorman": false, "dishwasher": false, "elevator": false, "roofDeck": false};

const FilterReducer = (oldState = state, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case FRONT_FILTER:
      return merge({}, oldState, action.bounds);
    case CLEAR_FILTER:
      return {};
    default:
      return oldState;
  }
};

export default FilterReducer;
