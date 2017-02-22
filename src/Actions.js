require('es6-promise').polyfill();
require('isomorphic-fetch');

export const ALL_UPDATE = 'ALL_UPDATE';
export const JOBS_UPDATE = 'JOBS_UPDATE';
export const BOXES_UPDATE = 'BOXES_UPDATE';
export const YEAR_UPDATE = 'YEAR_UPDATE';
export const ONTIME_UPDATE = 'ONTIME_UPDATE';

export const updateAll = () => {
  return (dispatch) => {
    fetch('/json')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: ALL_UPDATE,
          data
        });
      });
  };
};

export const updateJobs = () => {
  return (dispatch) => {
    fetch('/json/jobs')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: JOBS_UPDATE,
          data
        });
      });
  };
};

export const updateBoxes = () => {
  return (dispatch) => {
    fetch('/json/boxes')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: BOXES_UPDATE,
          data
        });
      });
  };
};

export const updateYear = () => {
  return (dispatch) => {
    fetch('/json/year')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: YEAR_UPDATE,
          data
        });
      });
  };
};

export const updateOntime = () => {
  return (dispatch) => {
    fetch('/json/ontime')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: ONTIME_UPDATE,
          data
        });
      });
  };
};