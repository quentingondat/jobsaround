import {
  JOBS_FETCH,
  JOBS_FETCH_SUCCESS,
  JOBS_GEO_REFRESH
} from '../actions/types'

const INITIAL_STATE = { jobs: [], refreshing: true, geo: {} }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JOBS_FETCH:
      return { ...state, refreshing: true }
    case JOBS_GEO_REFRESH:
      return { ...state, geo: action.payload }
    case JOBS_FETCH_SUCCESS:
      return { ...state, jobs: action.payload, refreshing: false }
    default:
      return state
  }
}
