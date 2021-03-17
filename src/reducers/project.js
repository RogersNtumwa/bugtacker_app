import {
  PROJECTS_LIST_FAIL,
  PROJECTS_LIST_REQUEST,
  PROJECTS_LIST_SUCCESS,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_UPDATE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_RESET,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
} from "../actions/types";

export const projectListReducer = (
  state = { projects: [], loading: true },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case PROJECTS_LIST_REQUEST:
      return { loading: true };

    case PROJECTS_LIST_SUCCESS:
      return {
        loading: false,
        projects: payload,
      };

    case PROJECTS_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const deleteProjectReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case PROJECT_DELETE_REQUEST:
      return { loading: true, ...state };
    case PROJECT_DELETE_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case PROJECT_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const createProjectReducer = (
  state = { success: false, project: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case PROJECT_CREATE_REQUEST:
      return { loading: true, ...state };
    case PROJECT_CREATE_SUCCESS:
      return {
        success: true,
        loading: false,
        project: payload,
      };
    case PROJECT_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const editProjectReducer = (state = { project: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case PROJECT_UPDATE_REQUEST:
      return { loading: true, ...state };
    case PROJECT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        project: payload,
      };
    case PROJECT_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case PROJECT_UPDATE_RESET:
      return {
        role: {},
      };
    default:
      return state;
  }
};
