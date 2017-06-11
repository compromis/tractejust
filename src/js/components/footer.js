import React from 'react';
import { translate } from 'react-translate';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer container">
        <hr />
        <h4>Segueix l'activitat de <a href="https://compromis.net" target="_blank"><img src='https://compromis.net/wp-content/themes/Compromis/images/logo-compromis-retina-bw.png' alt="Compromís" className="footer__logo" /></a></h4>

        <div className="footer__social-plugins">
          <div>
            <iframe
              src="https://platform.twitter.com/widgets/follow_button.html?screen_name=compromis&show_screen_name=true&show_count=true&size=l&lang=es"
              className="footer__social-plugins__twitter"
              width={200}
              height={37}>
            </iframe>
          </div>
          <div>
            <iframe
              src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fcoaliciocompromis&width=450&layout=standard&action=like&size=large&show_faces=true&share=true&height=80&appId=252515324782640&locale=ca_ES"
              className="footer__social-plugins__facebook"
              width={450}
              height={80}
              scrolling="no"
              frameBorder={0}
              allowTransparency={true}></iframe></div>
        </div>

        <hr />
        <p><strong>#TracteJust</strong> és una campanya de <a href="https://compromis.net" target="_blank">Compromís</a></p>
        <p><a href="mailto:info@compromis.net">info@compromis.net</a> | 96 382 66 06 | Plaça del Pilar, 1 - 46001 València</p>
        <hr />
      </footer>
    );
  }
}

export default translate('Footer')(Footer);
