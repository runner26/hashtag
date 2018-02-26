/* eslint import/prefer-default-export: 0 */
import { SIGN_UP } from './types';

export function signUp(name, region, phone, password) {
  return (dispatch, getState) => {
    console.log(getState());
    return { me: 'yeah', you: 'yeah' };
  };
}
