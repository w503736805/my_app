import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
// import { createStore, applyMiddleware } from 'rudux';
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import IntroRouter from './pages/intro'
render((
  <Provider store={store}>
    <BrowserRouter>
      <IntroRouter />
    </BrowserRouter>
  </Provider>
  )
  ,document.getElementById('root')
)

registerServiceWorker();
