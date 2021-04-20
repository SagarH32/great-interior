import axios from 'axios';
import {
  REVIEW_SUBMIT_FAIL,
  REVIEW_SUBMIT_REQUEST,
  REVIEW_SUBMIT_SUCCESS,
} from '../constants/reviewConstants';

export const submitReview = (review) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REVIEW_SUBMIT_REQUEST,
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
      `${process.env.REACT_APP_API}/review`,
      review,
      config
    );

    dispatch({
      type: REVIEW_SUBMIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REVIEW_SUBMIT_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};
