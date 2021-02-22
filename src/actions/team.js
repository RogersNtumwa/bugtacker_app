import axios from "axios";

import setAuthToken from "../utils/setAuthToken";
import {
  TEAMS_LIST_FAIL,
  TEAMS_LIST_REQUEST,
  TEAMS_LIST_SUCCESS,
  TEAM_CREATE_REQUEST,
  TEAM_CREATE_FAIL,
  TEAM_CREATE_SUCCESS,
  TEAM_UPDATE_FAIL,
  TEAM_UPDATE_REQUEST,
  TEAM_UPDATE_SUCCESS,
  TEAM_DELETE_FAIL,
  TEAM_DELETE_REQUEST,
  TEAM_DELETE_SUCCESS,
} from "./types";

export const getTeams = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch({ type: TEAMS_LIST_REQUEST });

    const { data } = await axios.get(
      "https://bugtracker-api-1.herokuapp.com/api/v1/teams"
    );

    dispatch({
      type: TEAMS_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: TEAMS_LIST_FAIL,
    });
  }
};

export const createTeam = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch({ type: TEAM_CREATE_REQUEST });

    const { data } = await axios.get(
      "https://bugtracker-api-1.herokuapp.com/api/v1/teams"
    );

    dispatch({
      type: TEAM_CREATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: TEAM_CREATE_FAIL,
    });
  }
};

export const updateTeam = (project) => async (dispatch, getstate) => {
  dispatch({
    type: TEAM_UPDATE_REQUEST,
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
      `https://bugtracker-api-1.herokuapp.com/api/v1/teams/${team._id}`,
      team,
      config
    );
    dispatch({
      type: TEAM_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: TEAM_UPDATE_FAIL,
    });
  }
};

export const deleteTeam = (id) => async (dispatch) => {
  dispatch({ type: TEAM_DELETE_REQUEST });
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    await axios.delete(
      `https://bugtracker-api-1.herokuapp.com/api/v1/teams/${id}`
    );
    dispatch({
      type: TEAM_DELETE_SUCCESS,
    });
  } catch (error) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: TEAM_DELETE_FAIL,
    });
  }
};
