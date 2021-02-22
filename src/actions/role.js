import axios from "axios";

import setAuthToken from "../utils/setAuthToken";
import {
  ROLES_LIST_FAIL,
  ROLES_LIST_REQUEST,
  ROLES_LIST_SUCCESS,
  ROLE_CREATE_REQUEST,
  ROLE_CREATE_FAIL,
  ROLE_CREATE_SUCCESS,
  ROLE_UPDATE_FAIL,
  ROLE_UPDATE_REQUEST,
  ROLE_UPDATE_SUCCESS,
  ROLE_DELETE_FAIL,
  ROLE_DELETE_REQUEST,
  ROLE_DELETE_SUCCESS,
} from "./types";

export const getRoles = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch({ type: ROLES_LIST_REQUEST });

    const { data } = await axios.get(
      "https://bugtracker-api-1.herokuapp.com/api/v1/roles"
    );

    dispatch({
      type: ROLES_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: TEAMS_LIST_FAIL,
    });
  }
};

export const createRole = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch({ type: ROLE_CREATE_REQUEST });

    const { data } = await axios.get(
      "https://bugtracker-api-1.herokuapp.com/api/v1/roles"
    );

    dispatch({
      type: ROLE_CREATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: ROLES_CREATE_FAIL,
    });
  }
};

export const updateRole = (role) => async (dispatch, getstate) => {
  dispatch({
    type: ROLE_UPDATE_REQUEST,
  });
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `https://bugtracker-api-1.herokuapp.com/api/v1/roles/${role._id}`,
      role,
      config
    );
    dispatch({
      type: ROLE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: ROLE_UPDATE_FAIL,
    });
  }
};

export const deleteRole = (id) => async (dispatch) => {
  dispatch({ type: TEAM_DELETE_REQUEST });
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    await axios.delete(
      `https://bugtracker-api-1.herokuapp.com/api/v1/roles/${id}`
    );
    dispatch({
      type: ROLE_DELETE_SUCCESS,
    });
  } catch (error) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: ROLE_DELETE_FAIL,
    });
  }
};
