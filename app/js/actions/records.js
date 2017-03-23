import * as types from './actionTypes'

export function getRecordsSagaActionCreator(fetch) {
  return {
    type: types.GET_RECORDS,
    fetch
  }
}

export function fetchActionCreator(fetch) {
  return {
    type: types.TOGGLE_FETCH,
    fetch
  }
}

export function getRecordsActionCreator(e, records) {
  e.preventDefault()
  return {
    type: types.GET_RECORDS_DONE,
    records
  }
}

export function addRecordActionCreator(e, record) {
  e.preventDefault()
  return {
    type: types.ADD_RECORD_DONE,
    record
  }
}

export function toggleSubmitActionCreator() {
  return {
    type: types.TOGGLE_SUBMIT_FORM
  }
}

export function deleteRecordActionCreator(id) {
  return {
    type: types.DELETE_RECORD,
    id
  }
}
