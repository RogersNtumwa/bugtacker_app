import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "./reducers/auth";
import alertReducer from "./reducers/alert";
import {
  bugDetails,
  bugsList,
  createBugReducer,
  deleteBugReducer,
  editBugReducer,
} from "./reducers/bug";
import {
  createRoleReducer,
  deleteRoleReducer,
  editRoleReducer,
  rolesListReducer,
} from "./reducers/role";
import {
  createProjectReducer,
  deleteProjectReducer,
  editProjectReducer,
  projectListReducer,
} from "./reducers/project";
import {
  createTeamReducer,
  deleteTeamReducer,
  editTeamReducer,
  teamListReducer,
} from "./reducers/team";

const middleware = [thunk];

const initialState = {};

const reducer = combineReducers({
  auth: user,
  alert: alertReducer,
  bug: bugDetails,
  bugs: bugsList,
  addBug: createBugReducer,
  editBug: editBugReducer,
  deleteBug: deleteBugReducer,
  roles: rolesListReducer,
  editRoles: editRoleReducer,
  deleteRole: deleteRoleReducer,
  addRole: createRoleReducer,
  projects: projectListReducer,
  editProject: editProjectReducer,
  deleteProject: deleteProjectReducer,
  addProject: createProjectReducer,
  projects: teamListReducer,
  editTeam: editTeamReducer,
  deleteTeam: deleteTeamReducer,
  addTeam: createTeamReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
