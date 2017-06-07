import React from 'react';

import { translate } from "react-translate";

import Header from './components/header';
import CarouselWidget from './components/carousel';
import Map from './components/map';
import MainText from './components/main-text';
import Percentages from './components/percentages';
import Chart from './components/chart';
import Debt from './components/debt';
import Footer from './components/footer';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CarouselWidget />

        <div className="container main-container" id="content">
          <div className="row">
            <div className="col-sm-6">
                <MainText />
            </div>
            <div className="col-sm-6">
                <Map />
                <Percentages />  
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Chart />
            </div>
            <div className="col-sm-12">
              <Debt />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default translate("Layout")(Layout);
