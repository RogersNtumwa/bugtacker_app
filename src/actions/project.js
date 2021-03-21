import axios from "axios";

import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";
import {
  PROJECTS_LIST_FAIL,
  PROJECTS_LIST_REQUEST,
  PROJECTS_LIST_SUCCESS,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE_SUCCESS,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
} from "./types";

export const getProjects = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch({ type: PROJECTS_LIST_REQUEST });

    const { data } = await axios.get(
      "https://bugtracker-api-1.herokuapp.com/api/v1/projects"
    );

    dispatch({
      type: PROJECTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECTS_LIST_FAIL,
    });
  }
};

export const createProject = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch({ type: PROJECT_CREATE_REQUEST });

    const { data } = await axios.get(
      "https://bugtracker-api-1.herokuapp.com/api/v1/projects"
    );

    dispatch({
      type: PROJECT_CREATE_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROJECT_CREATE_FAIL,
    });
  }
};

export const updateProject = (project) => async (dispatch, getstate) => {
  dispatch({
    type: PROJECT_UPDATE_REQUEST,
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
      `https://bugtracker-api-1.herokuapp.com/api/v1/projects/${project._id}`,
      project,
      config
    );
    dispatch({
      type: PROJECT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROJECT_UPDATE_FAIL,
    });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  dispatch({ type: PROJECT_DELETE_REQUEST });
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    await axios.delete(
      `https://bugtracker-api-1.herokuapp.com/api/v1/projects/${id}`
    );
    dispatch({
      type: PROJECT_DELETE_SUCCESS,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROJECT_DELETE_FAIL,
    });
  }
};
