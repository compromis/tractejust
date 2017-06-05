import React from 'react';
import ReactDOM from 'react-dom';
import '../fonts/fonts.scss';
import 'bootstrap-loader';
import '../sass/app.scss';

import Layout from './layout';

ReactDOM.render(
  <Layout />,
  document.getElementById('app')
);
