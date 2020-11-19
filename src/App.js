import React, {Component} from 'react'; // eslint-disable-next-lin
import {
  HashRouter as Router,
  Route,
  } from 'react-router-dom';
import { Booking } from './components/Booking.js';
import { Dashboard } from './components/Dashboard.js';
import './App.css';

export class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Route path="/" component={Booking} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    )
  }
}

export default App;
