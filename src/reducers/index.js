import { combineReducers } from "redux";
import users from "./users.js";
import followers from "./followers";
import auth from "./auth";
import network from './network'

export default combineReducers({
  auth,
  followers,
  users,
  network
});

export const getUsers = state => state.users;
export const getIsAuthorized = state =>
  state.auth.isAuthorized;
export const getFollowers = state => state.followers;

