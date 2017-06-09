import React from 'react';
import { translate } from "react-translate";

class TakeAction extends React.Component {

  render() {
    return (
      <div className="block take-action">
        <h2>{this.props.t('HEADER')}</h2>

        <p>{this.props.t('TEXT_SHARE')}</p>

        <ul className="take-action__social-buttons">
          <li>
            <a href="" className="take-action__button take-action__button--facebook">
              <span className="glyphicon glyphicon-share"></span>
              <span>{this.props.t('FACEBOOK')}</span>
            </a>
          </li>
          <li>
            <a href="" className="take-action__button take-action__button--twitter">
              <span className="glyphicon glyphicon-retweet"></span>
              <span>{this.props.t('TWITTER')}</span>
            </a>
          </li>
        </ul>

        <p>{this.props.t('TEXT_SIGNATURES')}</p>
        <ul className="take-action__social-buttons">
          <li>
            <a href="" className="take-action__button take-action__button--signatures">
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
