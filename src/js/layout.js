import React from 'react';

import { translate } from "react-translate";

import Header from './components/header';
import Amendments from './components/amendments';
import Motions from './components/motions';
import Map from './components/map';
import MainText from './components/main-text';
import Percentages from './components/percentages';
import Chart from './components/chart';
import Debt from './components/debt';
import Video from './components/video';
import TakeAction from './components/take-action';
import Footer from './components/footer';

class Layout extends React.Component {

  render() {

    return (
      <div>
        <Header shareableURL={this.props.t('URL')} shareableText={this.props.t('TWEET')} shareableHashtag={this.props.t('HASHTAG')} />
        <Amendments />

        <div className="container main-container" id="content">
          <div className="row">
            <div className="col-sm-6">
                <MainText />
                <Chart />
                <Motions />
                <TakeAction shareableURL={this.props.t('URL')} shareableText={this.props.t('TWEET')} shareableHashtag={this.props.t('HASHTAG')} />
            </div>
            <div className="col-sm-6">
                <Map />
                <Percentages />
                <Debt />
                <Video />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default translate("Layout")(Layout);
