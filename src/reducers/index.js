import { combineReducers } from 'redux';
import Listings from './ListingsReducer.js';

export default combineReducers({
  listings: Listings
});
