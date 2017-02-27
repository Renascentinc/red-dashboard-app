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
  // var orders = [ 'Orders' ];
  var ontime = [ 'On Time' ];

  Object.keys(state.year).forEach((k) => {
    x.push(moment(state.year[k].date).format('YYYY-MM-DD'));
    // orders.push(state.year[k].orders);
    ontime.push(state.year[k].percent);
  });

  return {
    data: {
      x: 'x',
      columns: [
        x,
       // orders,
        ontime
      ],
      types: {
        'On Time': 'area-spline'
      },
      axis: {
        'On Time':'y' //,
       // 'Orders': 'y2'
      }
    }
  };
};

export default connect(mapStateToProps)(OnTimeYear);
