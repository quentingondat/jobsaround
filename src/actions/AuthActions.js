import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  LOGIN_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_FOCUS,
  LOGIN_BLUR
} from './types'

export const loginChanged = ({ prop, value }) => {
  return {
    type: LOGIN_CHANGED,
    payload: { prop, value }
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error)
        loginUserFail(dispatch)})
  }
}

export const loginFocus = () => {
  return { type: LOGIN_FOCUS }
}

export const loginBlur = () => {
  return { type: LOGIN_BLUR }
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })

  Actions.main()
}
