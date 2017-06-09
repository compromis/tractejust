import React from 'react';
import { translate } from "react-translate";

import SVGChart from 'react-svg-inline-loader!../../images/chart.svg';

class Chart extends React.Component {

  render() {
    return (
      <div className="block chart">
        <a href="http://www.levante-emv.com/comunitat-valenciana/2017/06/04/gobierno-dejo-ejecutar-mitad-inversion/1575964.html" target="_blank" className="heading heading--levante">
          <div className="heading__source">
            <img src="/images/map/levante.png" alt="Levante EMV" />
          </div>
          <div className="heading__text">
            El Gobierno dejó sin ejecutar en 2016 la mitad de la inversión presupuestada
          </div>
        </a>

        <hr />

        <div className="chart__wrapper">
          <div className="chart__bar chart__bar--total">
            <span className="chart__bar__number">1.180M€</span>
            <span className="chart__bar__legend">
              <h4>{this.props.t('TOTAL')}</h4>
              <p>{this.props.t('TOTAL_TEXT')}</p>
            </span>
          </div>
          <div className="chart__bar chart__bar--budgeted">
            <span className="chart__bar__number">879,2M€</span>
            <span className="chart__bar__legend">
              <h4>{this.props.t('BUDGETED')}</h4>
              <p>{this.props.t('BUDGETED_TEXT')}</p>
            </span>
          </div>
          <div className="chart__bar chart__bar--executed">
            <span className="chart__bar__number">386,1M€</span>
            <span className="chart__bar__legend">
              <h4>{this.props.t('EXECUTED')}</h4>
              <p>{this.props.t('EXECUTED_TEXT')}</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('Chart')(Chart);
