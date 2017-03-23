import { combineReducers } from 'redux'
import loading, * as fromLoading from './loading'
import routing, * as fromRouting from './routing'
import records from './recordsReducer'
import showForm from './toggleSubmitReducer'
import fetch from './fetchReducer'
import actionsHistory from './actionsHistory'
import { isTesting } from '../utils/utils'
import { reducer as formReducer } from 'redux-form'

const allReducers = {
  loading,
  routing,
  records,
  showForm,
  fetch,
  form: formReducer
}

if (isTesting()) {
  allReducers.actionsHistory = actionsHistory
}

const rootReducer = combineReducers(allReducers)

export default rootReducer

/* loaders selectors start */
export const isLoadingSelector = (state, loader) => fromLoading.isLoadingSelector(state.loading, loader)
/* loaders selectors end */

/* routing selectors start */
export const routingPathnameSelector = state =>
    fromRouting.pathnameSelector(state.routing)
/* routing selectors end */
