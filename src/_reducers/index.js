import { combineReducers } from 'redux';
import corona from './coronaReducers';
import chart from './chartReducers';
import table from './tableReducers';

export default combineReducers({
	corona,
	chart,
	table
});
