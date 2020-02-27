import { combineReducers } from 'redux';
import { reducers as feed } from './feed';

const rootReducer = combineReducers({
  feed,
});

export default rootReducer;
