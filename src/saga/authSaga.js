import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import request from '../../tools/request';
import {CONST} from "../../env";
import {LOGIN_REQUEST} from "../constants";
var jwtDecode = require('jwt-decode');

import AuthService from "../services/AuthService";
import {toastr} from "react-redux-toastr";


function* loginSaga(action) {
  let REQUEST_ACTION = LOGIN_REQUEST;

  try {
    yield put(REQUEST_ACTION.request());

    let authService = new AuthService();
    const data = yield authService.login(action.payload.email, action.payload.password);

    yield put(REQUEST_ACTION.success(data));
    toastr.success('Success', 'You\'re logged in');
  } catch (e) {
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export default loginSaga;
