import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

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
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_DETAILS_FAIL,
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

export const teamDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TEAM_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://bugtracker-api-1.herokuapp.com/api/v1/teams/${id}`
    );
    dispatch({
      type: TEAM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEAM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createTeam = ({ teamName }) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch({ type: TEAM_CREATE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ teamName });

    const { data } = await axios.post(
      "https://bugtracker-api-1.herokuapp.com/api/v1/teams",
      body,
      config
    );
    dispatch({
      type: TEAM_CREATE_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: TEAM_CREATE_FAIL,
    });
  }
};

export const updateTeam = (team) => async (dispatch, getstate) => {
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
  } catch (err) {
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
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: TEAM_DELETE_FAIL,
    });
  }
};
