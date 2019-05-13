import { SIGN_IN, SIGN_OUT } from './types';
import fakeAuth from '../../../auth/fakeAuth';
import randomNumber from '../../utils/randomNumber';

export const signIn = callback => async dispatch => {
  await fakeAuth.signIn();
  const userId = randomNumber(0, 100);

  callback();

  dispatch({
    type: SIGN_IN,
    payload: { userId },
  });
};

export const signOut = callback => async dispatch => {
  await fakeAuth.signOut();

  callback();

  dispatch({
    type: SIGN_OUT,
  });
};
