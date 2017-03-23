import { call, put, fork } from 'redux-saga/effects'
import { takeEvery, takeLatest } from 'redux-saga'
import Api from '../api'

function* fetchRecordsSaga() {
  yield takeLatest('GET_RECORDS', callFetchRecords)
}

function* callFetchRecords({ fetch }) {
  // only fetch records if not up to date
  if (!fetch) {
    const records = yield call(Api.fetch)

    if (records) {
      yield put({type: 'GET_RECORDS_DONE', records})
      yield put({ type: 'TOGGLE_FETCH', fetch })
    }
  }
}

function* addRecordSaga() {
  yield takeEvery('ADD_RECORD', callAddRecord)
}

function* callAddRecord({ fetch, name, nickName, floor, resolve, reject }) {
  const data = yield call(Api.addRecord, {name, nickName, floor})

  if (data) {
    yield put({ type: 'ADD_RECORD_DONE', data })
    yield put({ type: 'TOGGLE_SUBMIT_FORM' })
    yield put({ type: 'TOGGLE_FETCH', fetch })
    yield call(resolve)
  } else {
    yield call(reject)
  }
}

function* deleteRecordSaga() {
  yield takeEvery('DELETE_RECORD', callDeleteRecord)
}

function* callDeleteRecord({ id }) {
  yield call(Api.deleteRecord, id)
}

export default function* root() {
  yield [
    fork(fetchRecordsSaga),
    fork(addRecordSaga),
    fork(deleteRecordSaga)
  ]
}
