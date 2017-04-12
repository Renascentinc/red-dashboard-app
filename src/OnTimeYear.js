import React, { PropTypes as PT } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
// import Chart from 'react-c3';
import Reaccct from 'reaccct';

const OnTimeYear = (props) => {
  const options = {
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          // culling: true,
          format: '%Y-%m-%d',
          rotate: 60
        }
      }
    }
  };

  // if (props.windowWidth < 1000) {
  //   options.axis.x.tick.culling = { max: 5 };
  // }
  return (
    <div className="ontime-history">
      <Reaccct data={props.data} type="timeseries" options={options} />
    </div>
  );
};

OnTimeYear.propTypes = {
  width: PT.number,
  height: PT.number,
  data: PT.arrayOf(PT.object)
};

const mapStateToProps = (state) => {
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
    },
    windowWidth: state.data.size
  };
};

export default connect(mapStateToProps)(OnTimeYear);
