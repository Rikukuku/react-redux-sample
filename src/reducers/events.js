import { 
  READ_EVENTS, 
  DELETE_EVENT, 
  READ_EVENT, 
  UPDATE_EVENT,
  CREATE_EVENT 
} from '../actions'
import mapKeys from 'lodash/mapKeys'

export default (events={} , action) => {
  switch (action.type){
    case READ_EVENTS:
      return mapKeys(action.res.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.res.data
      return {...events, [data.id]: data}
    default:
      return events
  }
}
