import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
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
            <p className="navbar-text navbar-campaign-name">
              <a href="">#TracteJust</a>
            </p>
          </div>

          <div className="collapse navbar-collapse" id="languages-navbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Valencià</a></li>
              <li><a href="#">Castellano</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

module.exports = Header;
