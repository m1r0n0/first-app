import { put, takeEvery, call } from "redux-saga/effects";
import { addManyCustomersAction, FETCH_USERS } from "../store/customerReducer";

const fetchCustomers = () =>
  fetch("https://jsonplaceholder.typicode.com/users");

function* fetchUserWorker() {
  const data = yield call(fetchCustomers);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield console.log(json);
  yield put(addManyCustomersAction(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}
