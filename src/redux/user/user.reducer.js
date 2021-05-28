import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: undefined,
      };
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
