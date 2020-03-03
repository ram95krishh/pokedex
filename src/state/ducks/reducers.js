import { combineReducers } from 'redux-seamless-immutable';
import { reducers as feed } from './feed';

const rootReducer = combineReducers({
  feed,
});

export default rootReducer;
