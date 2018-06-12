import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import IntroRouter from './pages/intro'
render((
    <BrowserRouter>
      <IntroRouter />
    </BrowserRouter>
  )
  ,document.getElementById('root')
)

registerServiceWorker();
