import React, { Component } from 'react';
import './App.css';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, Cell } from 'recharts';

import OnTime from './OnTime';
import OnTimeYear from './OnTimeYear';
import BoxesAvailable from './BoxesAvailable';
import JobsOutstanding from './JobsOutstanding';

class App extends Component {
  render() {
    return (
      <div className="App container">
      	<div className="row">
      		<div className="one-half column">
						<h2>On Time Percentage (two weeks)</h2>
      			<OnTime width={400} height={200} />
      		</div>
      		<div className="one-half column">
						<h2>Jobs Outstanding</h2>
	      		<JobsOutstanding width={400} height={400} />
	      	</div>
	    </div>
	    <div className="row">
      		<div className="one-half column">
						<h2>Boxes Available</h2>
    	  		<BoxesAvailable width={400} height={400} />
    	  	</div>
      		<div className="one-half column">
						<h2>On Time Percentage (one year)</h2>
        		<OnTimeYear width={400} height={400} />
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
