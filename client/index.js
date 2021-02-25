import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './exports';
import './Base.scss';
import './Reuse.scss';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,

  document.getElementById('root')
);
