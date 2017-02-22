import React, { PropTypes as PT } from 'react';
import { connect } from 'react-redux';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const OnTime = (props) => {
  return (
    <RadialBarChart
      width={props.width}
      height={props.height}
      innerRadius="60%"
      outerRadius="80%"
      data={props.data}
      >
      <RadialBar
        data={props.data}
        startAngle={180}
        endAngle={0}
        fill="#000"
        label
        background
        clockWise={true}
        dataKey="value"
      />
      <Legend iconSize={10} width={120} layout="vertical" verticalAlign="bottom" align="center" />
      <Tooltip />
    </RadialBarChart>
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
    data: [
      {
        name: "On Time",
        value: state.ontime
      }
    ]
  };
};

export default connect(mapStateToProps)(OnTime);
