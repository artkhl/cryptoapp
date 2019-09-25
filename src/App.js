import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axios from 'axios';
import Header from './Header'
import CryptoTable from './CryptoTable'
import About from './About';
import NotFound from './NotFound';

import './App.css';

export default class App extends React.Component {

  state = {
    crypts: []
  }

  getData() {
    axios.get(`https://cors-anywhere.herokuapp.com/url=http://api.coincap.io/v2/assets?limit=10`)
      .then(res => {
        const current = res.data.data;
        this.setState({ crypts: current });
      }).catch(
        (e) => console.log(e)
      )
  }

  componentDidMount() {
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 5000);
  }

  render() {
  return (
    <Router>
      <Fragment>
          <Header />
          <Switch>
            <Route exact path='/' render={(props) => <CryptoTable {...props} d={this.state.crypts} />} />
            <Route exact path='/about' component = {About} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
  );
      }
}
