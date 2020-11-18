import React, {Component} from 'react'; // eslint-disable-next-lin
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import { Booking } from './components/Booking.js';
import { Dashboard } from './components/Dashboard.js';
import './App.css';

export class App extends Component {

  render() {

    return (
      <BrowserRouter>
      <div className="App">
          <Switch>
          <Route exact path="/" component={Booking} />
          <Route path="/dashboard" component={Dashboard} />
          </Switch>
    </div>
        </BrowserRouter>
    )
  }
}

export default App;