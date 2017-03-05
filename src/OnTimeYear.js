import React, { PropTypes as PT } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
// import Chart from 'react-c3';
import Reaccct from 'reaccct';

const OnTimeYear = (props) => {
  return (
    <div className="ontime-history">
      <Reaccct data={props.data} type="timeseries" options={{
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%Y-%m-%d'
            }
          }
        }
      }} />
    </div>
  );
};

OnTimeYear.propTypes = {
  width: PT.number,
  height: PT.number,
  data: PT.arrayOf(PT.object)
};

const mapStateToProps = (state) => {
  console.log(state);

  var x = [ 'x' ];
  var ontime = [ 'On Time' ];
  var y2Max = 0;

  Object.keys(state.year).forEach((k) => {
    x.push(moment(state.year[k].date).format('YYYY-MM-DD'));
    y2Max = y2Max > state.year[k].orders ? y2Max : state.year[k].orders;
    // orders.push(state.year[k].orders);
    ontime.push(state.year[k].percent);
  });

  return {
    data: {
      x: 'x',
      columns: [
        x,
        ontime
      ],
      types: {
        'On Time': 'area-spline'
      }
    }
  };
};

export default connect(mapStateToProps)(OnTimeYear);
