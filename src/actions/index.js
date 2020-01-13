import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const READ_EVENT = 'READ_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'


export const readEvents = () => async dispatch => {
  const res = await axios.get(`${process.env.REACT_APP_ROOT_URL}/events/${process.env.REACT_APP_QUERYSTRING}`)
  dispatch({type: READ_EVENTS, res})
}

export const postEvent = values => async dispatch => {
  const res = await axios.post(
    `${process.env.REACT_APP_ROOT_URL}/events/${process.env.REACT_APP_QUERYSTRING}`,
    values
  )
  dispatch({type: CREATE_EVENT, res})
}

export const deleteEvent = id => async dispatch => {
 await axios.delete(
    `${process.env.REACT_APP_ROOT_URL}/events/${id}${process.env.REACT_APP_QUERYSTRING}`,
  )
  dispatch({type: DELETE_EVENT, id})
}

export const readEvent = id => async dispatch => {
  const res = await axios.get(
     `${process.env.REACT_APP_ROOT_URL}/events/${id}${process.env.REACT_APP_QUERYSTRING}`)
   dispatch({type: READ_EVENT, res})
 }

 export const putEvent = values => async dispatch => {
   const res = await axios.put(
     `${process.env.REACT_APP_ROOT_URL}/events/${values.id}${process.env.REACT_APP_QUERYSTRING}`,
      values 
    )
    dispatch({ type: UPDATE_EVENT, res })
 }