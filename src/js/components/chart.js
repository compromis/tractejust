import React from 'react';

import SVGChart from 'react-svg-inline-loader!../../images/chart.svg';

class Chart extends React.Component {

  render() {
    return (
      <div className="block chart">
        <a href="" target="_blank" className="heading heading--levante">
          <div className="heading__source">
            <img src="/images/map/levante.png" alt="Levante EMV" />
          </div>
          <div className="heading__text">
            El Gobierno dejó sin ejecutar en 2016 la mitad de la inversión presupuestada
          </div>
        </a>

        <hr />

        <div className="chart__wrapper">
          <div className="chart__bar chart__bar--total"><span>1.180M€</span></div>
          <div className="chart__bar chart__bar--budgeted"><span>879,2M€</span></div>
          <div className="chart__bar chart__bar--executed"><span>386,1M€</span></div>
        </div>
      </div>
    );
  }
}

export default Chart;
