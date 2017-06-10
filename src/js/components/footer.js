import React from 'react';
//import ReactFBLike from 'react-fb-like';
import { translate } from 'react-translate';
//import { Follow } from 'react-twitter-widgets';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer container">
        <hr />
        <h4>Segueix l'activitat de <a href="https://compromis.net" target="_blank"><img src='https://compromis.net/wp-content/themes/Compromis/images/logo-compromis-retina-bw.png' alt="Compromís" className="footer__logo" /></a></h4>

        {/*<div className="footer__social-plugins">
          <Follow username="compromis" />
          <ReactFBLike language="ca_ES" appId="252515324782640" version="v2.8" href="https://facebook.com/coaliciocompromis" layout="standard" action="like" size="small" showFaces="true" share="true" />
        </div>*/}

        <hr />
        <p><strong>#TracteJust</strong> és una campanya de <a href="https://compromis.net" target="_blank">Compromís</a></p>
        <p><a href="mailto:info@compromis.net">info@compromis.net</a> | 96 382 66 06 | Plaça del Pilar, 1 - 46001 València</p>
        <hr />
      </footer>
    );
  }
}

export default translate('Footer')(Footer);
