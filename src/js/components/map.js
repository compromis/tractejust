import React from 'react';
import { translate } from "react-translate";

import SVGMap from 'react-svg-inline-loader!../../images/mapa.svg';

class Map extends React.Component {

  render() {
    return (
      <div className="map block">
        <a href="http://www.elmundo.es/comunidad-valenciana/2017/04/05/58e3fc04468aeb4b798b45c0.html" target="_blank" className="heading">
          <span className="heading__source">
            <img src="/images/map/elmundo.png" />
          </span>
          <span className="heading__text">
            El Gobierno relega a la Comunidad a la cola de la inversión por habitante</span>
        </a>
        {<SVGMap />}
        <span className="map__legend">
          2017<br />{this.props.t('LEGEND')}
        </span>
      </div>
    );
  }
}

export default translate('Map')(Map);
