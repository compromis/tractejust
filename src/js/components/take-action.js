import React from 'react';
import { translate } from "react-translate";
import fullaSignatures from "../../docs/fulla-signatures.pdf";

class TakeAction extends React.Component {

  handleClick(service, e){
    const { shareableText, shareableURL, shareableHashtag } = this.props;
    const windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes';
    const width = 550;
    const height = 420;
    const winHeight = screen.height;
    const winWidth = screen.width;

    let left = Math.round((winWidth / 2) - (width / 2));
    let top = 0;

    if(winHeight > height) {
      top = Math.round((winHeight / 2) - (height / 2));
    }

    var target = service == 'facebook' ? 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(shareableURL) : 'https://twitter.com/intent/tweet?text=' + encodeURI(shareableText) + '%23' + shareableHashtag + '&url=' + encodeURI(shareableURL) + '&via=compromis&related=compromis';
    window.open(target, 'intent', windowOptions + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);
    e.preventDefault();
  }

  render() {

    var { shareableText, shareableURL } = this.props;

    return (
      <div className="block take-action">
        <h2>{this.props.t('HEADER')}</h2>

        <p>{this.props.t('TEXT_SHARE')}</p>

        <ul className="take-action__social-buttons">
          <li>
            <a onClick={(s,e) => this.handleClick('facebook',e)} target="_blank" className="take-action__button take-action__button--facebook">
              <span className="glyphicon glyphicon-share"></span>
              <span>{this.props.t('FACEBOOK')}</span>
            </a>
          </li>
          <li>
            <a onClick={(s,e) => this.handleClick('twitter',e)} target="_blank" className="take-action__button take-action__button--twitter">
              <span className="glyphicon glyphicon-retweet"></span>
              <span>{this.props.t('TWITTER')}</span>
            </a>
          </li>
          <li>
            <a href="https://twibbon.com/Support/tracte-just" target="_blank" className="take-action__button take-action__button--profile">
              <span className="glyphicon glyphicon-user"></span>
              <span>{this.props.t('PROFILE_PIC')}</span>
            </a>
          </li>
        </ul>

        <p>{this.props.t('TEXT_SIGNATURES')}</p>
        <ul className="take-action__social-buttons">
          <li>
            <a href={fullaSignatures} target="_blank" className="take-action__button take-action__button--signatures">
              <span className="glyphicon glyphicon-pencil"></span>
              <span>{this.props.t('SIGNATURES')}</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default translate('TakeAction')(TakeAction);
