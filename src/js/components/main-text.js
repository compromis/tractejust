import React from 'react';
import { translate } from "react-translate";

import TracteJustLogo from '../../images/tracte-just.svg';

class MainText extends React.Component {

  render() {
    return (
      <div className="block main-text">

        <h2><img src={TracteJustLogo} alt="Per un Tracte Just" /></h2>

        <span dangerouslySetInnerHTML={{__html: this.props.t('MAIN_TEXT')}}></span>
      </div>
    );
  }
}

export default translate('MainText')(MainText);
