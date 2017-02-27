import React, { PropTypes as PT } from 'react';
import { connect } from 'react-redux';
// import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
// import Chart from 'react-c3';
import Reaccct from 'reaccct';

const OnTime = (props) => {
  return (
    <div className="ontime-guage">
      <Reaccct data={props.data} options={{
        guage: {
          label: {
            format: (value, ratio) => {
              return value;
            },
            show: false
          },
          min: 0,
          max: 100,
          units: ' %',
          width: 39
        },
        color: {
          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          threshold: {
              values: [30, 60, 90, 100]
          }
        },
        size: {
          height: 180
        }
      }} />
    </div>
  );
};

OnTime.propTypes = {
  width: PT.number,
  height: PT.number,
  data: PT.arrayOf(PT.object)
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: {
      type: 'gauge',
      columns: [
        [ "On Time", state.ontime ]
      ]
    }
  };
};

export default connect(mapStateToProps)(OnTime);
