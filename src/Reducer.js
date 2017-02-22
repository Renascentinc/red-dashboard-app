import { combineReducers } from 'redux';

import {
  ALL_UPDATE,
  JOBS_UPDATE,
  BOXES_UPDATE,
  YEAR_UPDATE,
  ONTIME_UPDATE
} from './Actions';

const jobs = (state={}, action) => {
  switch (action.type) {
    case ALL_UPDATE:
      return action.data.jobs;
    case JOBS_UPDATE:
      return action.data;
    default:
      return state;
  }
}

const boxes = (state={}, action) => {
  switch (action.type) {
    case ALL_UPDATE:
      return action.data.boxes;
    case BOXES_UPDATE:
      return action.data;
    default:
      return state;
  }
}

const year = (state={}, action) => {
  switch (action.type) {
    case ALL_UPDATE:
      return action.data.year;
    case YEAR_UPDATE:
      return action.data;
    default:
      return state;
  }
}

const ontime = (state=0, action) => {
  switch (action.type) {
    case ALL_UPDATE:
      return action.data.ontime;
    case ONTIME_UPDATE:
      return action.data;
    default:
      return state === 0 ? 0.00 : state;
  }
}

export default combineReducers({
  jobs,
  boxes,
  year,
  ontime
});
