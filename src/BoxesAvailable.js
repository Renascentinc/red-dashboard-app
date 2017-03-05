import React, { PropTypes as PT } from 'react';
import { connect } from 'react-redux';
// import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
// import Chart from 'react-c3';
import Reaccct from 'reaccct';

const BoxesAvailable = (props) => {
  return (
    <div className="box-availability-chart">
      <Reaccct data={props.data} options={{
        bar: {
          width: "40px"
        },
        axis: {
          x: {
            type: 'category'
          }
        }
      }} />
    </div>
  );
};

BoxesAvailable.propTypes = {
  width: PT.number,
  height: PT.number,
  data: PT.arrayOf(PT.object)
};

const mapStateToProps = (state) => {
  console.log(state);

  var x = ['x'];
  var boxes = ['Boxes'];

  var keys = Object.keys(state.boxes);
  keys.sort();
  keys.forEach((key) => {
    x.push(key);
    console.log(typeof key);
    boxes.push(''+state.boxes[key]);
  });

  return {
    data: {
      type: 'bar',
      x: 'x',
      columns: [
        x,
        boxes
      ]
    }
  };
};

export default connect(mapStateToProps)(BoxesAvailable);
