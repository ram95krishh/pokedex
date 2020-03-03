import { combineReducers } from 'redux-seamless-immutable';
import { reducers as feed } from './feed';
import { reducers as widgets } from './widgets';

const rootReducer = combineReducers({
  feed,
  widgets,
});

export default rootReducer;
