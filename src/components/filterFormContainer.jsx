import { connect } from 'react-redux';
import { frontFilter } from '../actions/filterActions';
import FilterForm from './filterForm';


const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    frontFilter: (bounds) => dispatch(frontFilter(bounds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
