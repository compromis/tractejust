import React from 'react';
import { translate } from "react-translate";

class Header extends React.Component {

  render() {

    const { shareableURL, shareableText, shareableHashtag } = this.props;

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
            <a className="navbar-brand" href="https://compromis.net">
              <img src="https://compromis.net/wp-content/themes/Compromis/images/logo-compromis-retina.png" alt="Compromís" />
            </a>
            <div className="navbar-text navbar-campaign-name">
              <a href="/">{this.props.t('CAMPAIGN_NAME')}</a>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="languages-navbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <div className="social-buttons">
                  <iframe
                    src={'https://www.facebook.com/plugins/like.php?href=' + encodeURI(shareableURL) + '&width=198&layout=button_count&action=like&size=large&show_faces=false&share=true&height=37&appId=252515324782640&locale=ca_ES'}
                    width={213}
                    allowTransparency={true}
                    scrolling="no"
                    className="social-buttons__facebook"
                    frameBorder={0}
                    height={37}>
                  </iframe>
                  <iframe
                    src={'https://platform.twitter.com/widgets/tweet_button.html?size=l&url=' + encodeURI(shareableURL) + '&via=compromis&related=compromis&text=' + encodeURI(shareableText) + '%23' + shareableHashtag + '&lang=es'}
                    className="social-buttons__twitter"
                    width={140}
                    height={37}
                    allowTransparency={true}
                    scrolling="no"
                    frameBorder={0}>
                  </iframe>
                </div>
              </li>

              <li className={language == 'ca' ? 'active' : ''}><a href="/">Valencià</a></li>
              <li className={language == 'es' ? 'active' : ''}><a href="/cas">Castellano</a></li>
              <li className={language == 'en' ? 'active' : ''}><a href="/en">English</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default translate('Header')(Header);
