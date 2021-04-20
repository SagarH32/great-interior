import {
  ALL_USER_FAIL,
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  MAKE_ADMIN_REQUEST,
  MAKE_ADMIN_SUCCESS,
  MAKE_ADMIN_FAIL,
} from '../constants/userConstants';

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USER_REQUEST:
      return { loading: true, users: [] };
    case ALL_USER_SUCCESS:
      return { loading: false, users: action.payload };
    case ALL_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const makeAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case MAKE_ADMIN_REQUEST:
      return { loading: true };
    case MAKE_ADMIN_SUCCESS:
      return { loading: false, success: true };
    case MAKE_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
