import React from 'react';
import ReactDOM from 'react-dom';
import { TranslatorProvider } from "react-translate";

import '../fonts/fonts.scss';
import '../sass/app.scss';

import Layout from './layout';

import catalan from './i18n/ca.js';
import spanish from './i18n/es.js';

require.context("../images/amendments", true);
require('../images/thumbnail.jpg');
require('../images/thumbnail.es.jpg');

var translations = language == 'es' ? spanish : catalan;

class App extends React.Component {

  render(){
    return(
      <TranslatorProvider translations={translations}>
        <Layout />
      </TranslatorProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
