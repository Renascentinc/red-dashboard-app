import React, { PropTypes as PT } from 'react';
import { connect } from 'react-redux';
// import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
// import Chart from 'react-c3';
import Reaccct from 'reaccct';

const options = {
  bar: {
    width: "40px"
  },
  axis: {
    x: {
      type: 'category'
    }
  },
  grid: {
    y: {
      show: true
    }
  }
};

const JobsOutstanding = (props) => {
  return (
    <div className="jobs-outstanding-chart">
      <Reaccct data={props.data} options={options} />
    </div>
  );
};

JobsOutstanding.propTypes = {
  width: PT.number,
  height: PT.number,
  data: PT.arrayOf(PT.object)
};

const mapStateToProps = (state) => {
  var x = ['x'];
  var jobs = ['Jobs'];

  var keys = Object.keys(state.jobs);
  keys.sort();
  keys.forEach((key) => {
    x.push(key);
    jobs.push(''+state.jobs[key]);
  });

  return {
    data: {
      type: 'bar',
      x: 'x',
      columns: [
        x,
        jobs
      ]
    }
  };
};

export default connect(mapStateToProps)(JobsOutstanding);
