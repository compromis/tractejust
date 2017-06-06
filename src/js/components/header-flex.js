import React from 'react';

class HeaderFlex extends React.Component {

  render() {
    return (
      <header className="main-header">
        <div className="container">
          <div className="flex-container">
            <div className="logo">
              <a href="https://compromis.net">
                <img src="https://compromis.net/wp-content/themes/Compromis/images/logo-compromis-retina.png" alt="Compromís" />
              </a>
            </div>
            <div className="slogan">
              <a href="http://tractejust.org">#TracteJust</a>
            </div>
            <div className="languages">
              <ul>
                <li className="active">
                  <a href="">Valencià</a>
                </li>
                <li>
                  <a href="">Castellano</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

module.exports = HeaderFlex;
