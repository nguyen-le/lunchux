import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createStore } from 'redux';

import LandingPage from './containers/landing_page';
import SignUpPage from './containers/sign_up_page';
import reducers from './reducers/reducers';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHashHistory({queryKey: false})}>
      <Route path="/" component={LandingPage}/>
      <Route path="sign_up" component={SignUpPage}/>
    </Router>
  </Provider>,
  document.getElementById('main')
);