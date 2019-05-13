import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: false,
  userId: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: undefined,
      };
    default:
      return state;
  }
};
