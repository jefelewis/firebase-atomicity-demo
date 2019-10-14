// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import counterReducer from './counterReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  counterReducer: counterReducer,
});

// Exports
export default rootReducer;
