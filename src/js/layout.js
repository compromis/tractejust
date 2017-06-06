import React from 'react';

import { translate } from "react-translate";

import Header from './components/header';
import AmendmentsRoulette from './components/amendments-roulette';
import CarouselWidget from './components/carousel';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CarouselWidget />

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              {this.props.t("TITLE")}
            </div>
            <div className="col-sm-6">
                MAPA
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              BAR
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("Layout")(Layout);
