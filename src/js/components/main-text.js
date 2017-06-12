import React from 'react';
import { translate } from "react-translate";

import TracteJustLogoCA from '../../images/tracte-just.svg';
import TracteJustLogoES from '../../images/trato-justo.svg';

var logo = language == 'es' ? TracteJustLogoES : TracteJustLogoCA;

class MainText extends React.Component {

  render() {
    return (
      <div className="block main-text">

        <h2><img src={logo} alt={this.props.t('SLOGAN')} /></h2>

        <span dangerouslySetInnerHTML={{__html: this.props.t('MAIN_TEXT')}}></span>
      </div>
    );
  }
}

export default translate('MainText')(MainText);
