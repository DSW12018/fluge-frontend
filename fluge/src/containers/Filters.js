import { connect } from 'react-redux';
import Filters from '../components/Filters';
import { applyFilter } from '../actions';

const mapStateToProps = (state) => ({
  shiftFilter: state.filters.shiftFilter
});

const mapDispatchToProps = {
  applyFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
