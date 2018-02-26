import { combineReducers } from 'redux';
import * as signupReducers from './signup';


export default combineReducers(Object.assign(
  signupReducers
));
