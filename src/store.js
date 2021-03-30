import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "./reducers/auth";
import alertReducer from "./reducers/alert";
import {
  bugDetails,
  bugsList,
  commentBugReducer,
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
  projectDetailsReducer,
  projectListReducer,
} from "./reducers/project";
import {
  createTeamReducer,
  deleteTeamReducer,
  editTeamReducer,
  teamDetailsReducer,
  teamListReducer,
} from "./reducers/team";
import { userReducer } from "./reducers/users";

const middleware = [thunk];

const initialState = {};

const reducer = combineReducers({
  auth: user,
  alert: alertReducer,
  users: userReducer,
  bug: bugDetails,
  bugs: bugsList,
  addBug: createBugReducer,
  editBug: editBugReducer,
  commentBug: commentBugReducer,
  deleteBug: deleteBugReducer,
  roles: rolesListReducer,
  editRoles: editRoleReducer,
  deleteRole: deleteRoleReducer,
  addRole: createRoleReducer,
  projects: projectListReducer,
  project: projectDetailsReducer,
  editProject: editProjectReducer,
  deleteProject: deleteProjectReducer,
  addProject: createProjectReducer,
  teams: teamListReducer,
  team:teamDetailsReducer,
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
