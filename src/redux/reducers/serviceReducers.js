import {
  GET_SERVICE_FAIL,
  GET_SERVICE_REQUEST,
  GET_SERVICE_SUCCESS,
  GET_SINGLE_SERVICE_REQUEST,
  GET_SINGLE_SERVICE_SUCCESS,
  GET_SINGLE_SERVICE_FAIL,
  CREATE_SERVICE_REQUEST,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_FAIL,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_FAIL,
  DELETE_SERVICE_SUCCESS,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAIL,
} from '../constants/serviceConstants';

export const getServiceReducer = (state = { service: [] }, action) => {
  switch (action.type) {
    case GET_SERVICE_REQUEST:
      return { loading: true, service: [] };
    case GET_SERVICE_SUCCESS:
      return { loading: false, service: action.payload };
    case GET_SERVICE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createServiceReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SERVICE_REQUEST:
      return { loading: true };
    case CREATE_SERVICE_SUCCESS:
      return { loading: false, success: true };
    case CREATE_SERVICE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const singleServiceReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case GET_SINGLE_SERVICE_REQUEST:
      return { loading: true, service: {} };
    case GET_SINGLE_SERVICE_SUCCESS:
      return { loading: false, service: action.payload };
    case GET_SINGLE_SERVICE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const serviceUpdateReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case UPDATE_SERVICE_REQUEST:
      return { loading: true, service: {} };
    case UPDATE_SERVICE_SUCCESS:
      return { loading: false, service: action.payload };
    case UPDATE_SERVICE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const serviceDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SERVICE_REQUEST:
      return { loading: true };
    case DELETE_SERVICE_SUCCESS:
      return { loading: false, success: true };
    case DELETE_SERVICE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
