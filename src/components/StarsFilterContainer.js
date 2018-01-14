import { connect } from 'react-redux';
import RadioSelector from './RadioSelector';
import { changeFilter } from '../reducers/mainReducer.js';

const options = [{
  id: null,
  label: 'Any'
}, {
  id: '1-100',
  label: '1-100'
}, {
  id: '100-1000',
  label: '100-1000'
}, {
  id: '1000-10000',
  label: '1000-10000'
}, {
  id: '10000+',
  label: '10000+'
}];

const mapStateToProps = (state) => ({
  value: state.main.filters.stars,
  options: options
});
const onChange = function(newValue) {
  return changeFilter('stars', newValue);
}
const mapDispatchToProps = {
  onChange: onChange
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioSelector);