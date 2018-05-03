import { combineReducers } from 'redux';
import Listings from './listingsReducer.js';
import FilterReducer from './filterReducer';

export default combineReducers({
  listings: Listings,
  filters: FilterReducer
});
