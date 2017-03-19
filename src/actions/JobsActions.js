import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  JOBS_FETCH,
  JOBS_FETCH_SUCCESS,
  JOBS_GEO_REFRESH
} from './types'

const URL_BASE = 'https://jobsaround-161713.appspot.com/api/jobs?lon=2.3522&lat=48.8566&limit=40'

export const jobsFetch = () => {
  return (dispatch) => {
    dispatch({ type: JOBS_FETCH })
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var current_position = JSON.stringify(position)
        dispatch({ type: JOBS_GEO_REFRESH, payload: current_position })
        fetch(URL_BASE)
          .then((response) => response.json())
          .then((responseJson) => {
            dispatch({ type: JOBS_FETCH_SUCCESS, payload: responseJson.results })
      })
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }
}
