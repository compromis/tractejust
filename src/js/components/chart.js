import React from 'react';

import SVGChart from 'react-svg-inline-loader!../../images/chart.svg';

class Chart extends React.Component {

  render() {
    return (
      <div className="block chart">
        <div className="heading heading--levante">
          <div className="heading__source">
            <img src="/images/map/levante.png" alt="Levante EMV" />
          </div>
          <div className="heading__text">
            El Gobierno dejó sin ejecutar en 2016 la mitad de la inversión presupuestada
          </div>
        </div>

        <hr />

        {<SVGChart style={{margin: '-10px'}} />}
      </div>
    );
  }
}

export default Chart;
