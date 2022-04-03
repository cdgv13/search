import { _searchRepositoryHandler } from "./searchRepositoryHandler";
import { getSearchRepository } from "./searchRepositorySlice";
import { _searchUserHandler } from "./searchUserHandler";

const { all, takeLatest } = require("redux-saga/effects");

function* _searchRepositorySaga() {
  yield all([takeLatest(getSearchRepository.type, _searchRepositoryHandler)]);
}

export default _searchRepositorySaga;
