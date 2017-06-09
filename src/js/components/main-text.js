import React from 'react';
import { translate } from "react-translate";

class MainText extends React.Component {

  render() {
    return (
      <div className="block main-text">

        <h2><img src='images/tracte-just.svg' /></h2>

        <span dangerouslySetInnerHTML={{__html: this.props.t('MAIN_TEXT')}}></span>
      </div>
    );
  }
}

export default translate('MainText')(MainText);
