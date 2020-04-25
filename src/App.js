import React, { Component } from 'react';

// import route Components here
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes/routing';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return <Router history={history}>{routes}</Router>;
  }
}
export default App;
