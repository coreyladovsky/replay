import { connect } from "react-redux";
import { fetchListings } from "../actions/listingActions";
import UserListings from "./listingUserIndex";

const onlyUser = (array, match) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].authorKey === match) {
      output.push(array[i]);
    }
  }
  return output;
};

const mapStateToProps = (state, ownProps) => {
  let userListings = onlyUser(
    Object.values(state.listings),
    ownProps.match.params.authorKey
  );
  return {
    userListings
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    fetchListings: () => dispatch(fetchListings())
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(UserListings);
