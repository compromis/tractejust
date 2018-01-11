import React from 'react';
import { translate } from "react-translate";

class Motions extends React.Component {

  render() {
    return (
      <div className="motions block">
        <div className="motions__map">
          <iframe src="https://www.google.com/maps/d/embed?mid=1u0yAEUjyke5u780ObrWM4O4iaXY&hl=en" frameBorder={0} width="100%" height={480}></iframe>
        </div>
        <p>{this.props.t('LEGEND')}</p>
      </div>
    );
  }
}

export default translate('Motions')(Motions);
