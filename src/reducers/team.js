import {
  TEAMS_LIST_FAIL,
  TEAMS_LIST_REQUEST,
  TEAMS_LIST_SUCCESS,
  TEAM_CREATE_REQUEST,
  TEAM_CREATE_SUCCESS,
  TEAM_CREATE_FAIL,
  TEAM_UPDATE_FAIL,
  TEAM_UPDATE_REQUEST,
  TEAM_UPDATE_RESET,
  TEAM_UPDATE_SUCCESS,
  TEAM_DELETE_FAIL,
  TEAM_DELETE_REQUEST,
  TEAM_DELETE_SUCCESS,
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_DETAILS_FAIL,
} from "../actions/types";

export const teamListReducer = (state = { teams: [],loading: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case TEAMS_LIST_REQUEST:
      return { loading: true };

    case TEAMS_LIST_SUCCESS:
      return {
        loading: false,
        teams: payload,
      };

    case TEAMS_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const teamDetailsReducer = (
  state = { team: {}, loading: true },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case TEAM_DETAILS_REQUEST:
      return { loading: true, ...state };
    case TEAM_DETAILS_SUCCESS:
      return {
        team: payload,
        loading: false,
      };
    case TEAM_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const deleteTeamReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case TEAM_DELETE_REQUEST:
      return { loading: true, ...state };
    case TEAM_DELETE_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case TEAM_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const createTeamReducer = (
  state = { success: false, team: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case TEAM_CREATE_REQUEST:
      return { loading: true, ...state };
    case TEAM_CREATE_SUCCESS:
      return {
        success: true,
        loading: false,
        team: payload,
      };
    case TEAM_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const editTeamReducer = (state = { team: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case TEAM_UPDATE_REQUEST:
      return { loading: true, ...state };
    case TEAM_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        team: payload,
      };
    case TEAM_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case TEAM_UPDATE_RESET:
      return {
        team: {},
      };
    default:
      return state;
  }
};
