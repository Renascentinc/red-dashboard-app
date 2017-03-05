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
      			<OnTime width={400} height={200} />
      		</div>
      		<div className="one-half column">
	      		<JobsOutstanding width={400} height={400} />
	      	</div>
	    </div>
	    <div className="row">
      		<div className="one-half column">
    	  		<BoxesAvailable width={400} height={400} />
    	  	</div>
      		<div className="one-half column">
        		<OnTimeYear width={400} height={400} />
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
