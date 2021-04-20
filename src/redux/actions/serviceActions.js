import axios from 'axios';
import {
  CREATE_SERVICE_FAIL,
  CREATE_SERVICE_REQUEST,
  CREATE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAIL,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  GET_SERVICE_FAIL,
  GET_SERVICE_REQUEST,
  GET_SERVICE_SUCCESS,
  GET_SINGLE_SERVICE_FAIL,
  GET_SINGLE_SERVICE_REQUEST,
  GET_SINGLE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAIL,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
} from '../constants/serviceConstants';

export const getServiceAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SERVICE_REQUEST,
    });

    const { data } = await axios.get(`${process.env.REACT_APP_API}/services`);
    dispatch({
      type: GET_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SERVICE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const singleServiceAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SINGLE_SERVICE_REQUEST,
    });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/services/${id}`
    );
    console.log(data);
    dispatch({
      type: GET_SINGLE_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_SERVICE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};
export const serviceUpdateAction = (id, service) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: UPDATE_SERVICE_REQUEST,
    });

    const {
      rootLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_API}/service/${id}`,
      service,
      config
    );

    dispatch({
      type: UPDATE_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SERVICE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const createServiceAction = (service) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_SERVICE_REQUEST,
    });
    const {
      rootLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/service`,
      service,
      config
    );
    dispatch({
      type: CREATE_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SERVICE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const serviceDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_SERVICE_REQUEST,
    });
    const {
      rootLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `${process.env.REACT_APP_API}/service/${id}`,
      config
    );

    dispatch({
      type: DELETE_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SERVICE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};
