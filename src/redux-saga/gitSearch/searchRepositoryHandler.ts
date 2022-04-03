import { put, SagaReturnType, call } from "redux-saga/effects";
import _searchRepositoryRequest from "./searchRepositoryRequest";
import { setSearchRepository } from "./searchRepositorySlice";
import _searchUserRequest from "./searchUserRequest";
type searchRepositoryGet = SagaReturnType<typeof _searchRepositoryRequest>;

export function* _searchRepositoryHandler(action: any) {
  const repository = action.payload.repository;
  const message = "/repositories?q=" + repository;
  try {
    const responseApi: searchRepositoryGet = yield call(
      _searchRepositoryRequest,
      message
    );
    const { data } = responseApi;
    console.log("Esto es data Search User", data);
    yield put(setSearchRepository({ data }));
  } catch (error) {
    console.log("error sagas, error", error);
  }
}
