import React from 'react';

import SVGMap from 'react-svg-inline-loader!../../images/mapa.svg';

class Map extends React.Component {

  render() {
    return (
      <div className="map block">
        <span className="heading">
          <span className="heading__source">
            <img src="/images/map/elmundo.png" />
          </span>
          <span className="heading__text">
            El Gobierno relega a la Comunidad a la cola de la inversión por habitante</span>
        </span>
        {<SVGMap />}
        <span className="map__legend">
          2017<br />Inversió per habitant
        </span>
      </div>
    );
  }
}

export default Map;
