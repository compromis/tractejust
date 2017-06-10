import React from 'react';
import { translate } from "react-translate";

/*import ReactFBLike from 'react-fb-like';*/

class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-compromis navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#languages-navbar" aria-expanded="false">
              <span className="sr-only">Idioma</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src="https://compromis.net/wp-content/themes/Compromis/images/logo-compromis-retina.png" alt="Compromís" />
            </a>
            <div className="navbar-text navbar-campaign-name">
              <a href="/">#TracteJust</a>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="languages-navbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                {/*<div className="share-buttons">
                  <ReactFBLike
                    language="ca_ES"
                    appId="252515324782640"
                    version="v2.8"
                    href="http://tractejust.org"
                    layout="button_count"
                    action="like"
                    size="small"
                    showFaces="false"
                    share="true" />

                    <a href="https://twitter.com/share" className="twitter-share-button" data-text="Test" data-hashtags="TracteJust" data-related="compromis" data-lang="es" data-dnt="true" data-show-count="false">Tweet</a>

                </div>*/}
              </li>

              <li><a href="#">Valencià</a></li>
              <li><a href="#">Castellano</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default translate('Header')(Header);
