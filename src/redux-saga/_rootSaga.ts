import { all, fork } from "redux-saga/effects";
import _searchRepositorySaga from "./gitSearch/searchRepositorySaga";
import _searchUserSaga from "./gitSearch/searchUserSaga";

export function* watcherSaga() {
  yield all([fork(_searchUserSaga), fork(_searchRepositorySaga)]);
}
