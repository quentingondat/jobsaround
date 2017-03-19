import {
  LOGIN_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGIN_FOCUS,
  LOGIN_BLUR
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  focus: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value }
    case LOGIN_USER:
      return { ...state, loading: true, error: ''}
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }
    case LOGIN_USER_FAIL:
      return { ...state,
        error: 'Authentication Failed.',
        password: '',
        loading: false
      }
    case LOGIN_FOCUS:
      return { ...state, focus: true}
    case LOGIN_BLUR:
      return { ...state, focus: false}
    default:
      return state
  }
}
