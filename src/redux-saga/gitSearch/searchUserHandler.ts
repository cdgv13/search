import { put, SagaReturnType, call } from "redux-saga/effects";
import _searchUserRequest from "./searchUserRequest";
import { setSearchUser } from "./searchUserSlice";
type searchUserGet = SagaReturnType<typeof _searchUserRequest>;

export function* _searchUserHandler(action: any) {
  const user = action.payload.user;
  console.log("Esto es data GIT SEARCH ", user);

  const message = "/users/" + user;
  try {
    const responseApi: searchUserGet = yield call(_searchUserRequest, message);
    const { data } = responseApi;
    console.log("Esto es data Search User", data);
    yield put(setSearchUser({ data }));
  } catch (error) {
    console.log("error sagas, error", error);
  }
}
