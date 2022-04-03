import { _searchUserHandler } from "./searchUserHandler";
import { getSearchUser } from "./searchUserSlice";

const { all, takeLatest } = require("redux-saga/effects");

function* _searchUserSaga() {
  yield all([takeLatest(getSearchUser.type, _searchUserHandler)]);
}

export default _searchUserSaga;
