import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

import {
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
  USERS_LIST_REQUEST,
} from "./types";

export const getUsers = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch({ type: USERS_LIST_REQUEST });

    const { data } = await axios.get(
      "https://bugtracker-api-1.herokuapp.com/api/v1/users"
    );

    dispatch({
      type: USERS_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: USERS_LIST_FAIL,
    });
  }
};
