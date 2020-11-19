import React, {Component} from 'react'; // eslint-disable-next-lin
import {
  BrowserRouter as Router,
  Route, Switch
  } from 'react-router-dom';
import { Booking } from './components/Booking.js';
import { Dashboard } from './components/Dashboard.js';
import './App.css';

export class App extends Component {

  render() {

    return (
      <Router>
        <div>
        <Switch>
          <Route path="/dashboard" component={Booking} />
          <Route path="/" component={Dashboard} />
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
