import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import { BarChart } from 'react-d3-basic';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const typedata = [
  {
    type: "respot",
    count: 10,
    index: 1
  },
  {
    type: "pull",
    count: 20,
    index: 2
  },
  {
    type: "set",
    count: 40,
    index: 3
  },
  {
    type: "roundtrip",
    count: 30,
    index: 4
  }
];

const piedata = [
  { name: 'On Time', value: 35.34 }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BarChart width={400} height={400} data={typedata}>
          <Bar type="monotone" dataKey="count" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="type" />
          <YAxis />
        </BarChart>

        <PieChart width={400} height={400} >
          <Pie
            data={piedata} 
            startAngle={180}
            endAngle={0}
            innerRadius={50}
            outerRadius={90} 
            fill="#000"
            paddingAngle={0}
            label
          >
          </Pie>
        </PieChart>
      </div>
    );
  }
}

export default App;
