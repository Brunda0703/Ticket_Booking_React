import React, {Component} from 'react'; // eslint-disable-next-lin
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import { Booking } from './components/Booking.js';
import { Dashboard } from './components/Dashboard.js';
import './App.css';

export class App extends Component {

  render() {

    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" component={Booking} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
