import { combineReducers } from "@reduxjs/toolkit";
import _searchRepositoryReducer from "./gitSearch/searchRepositorySlice";
import _searchUserReducer from "./gitSearch/searchUserSlice";
const reducer = combineReducers({
  searchUser: _searchUserReducer,
  searchRepository: _searchRepositoryReducer,
});
export type RootState = ReturnType<typeof reducer>;
export default reducer;
