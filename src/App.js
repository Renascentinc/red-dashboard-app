import React, { Component } from 'react';
import './App.css';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, Cell } from 'recharts';

import OnTime from './OnTime';
import OnTimeYear from './OnTimeYear';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OnTimeYear width={400} height={400} />
        <OnTime width={400} height={200} />
      </div>
    );
  }
}

export default App;
