import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const signup = createReducer({}, {
  [types.SIGN_UP](state, action) {
    return action;
  }
});
export default signup;
