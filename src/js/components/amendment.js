import React from 'react';
import { translate } from "react-translate";

class Amendment extends React.Component {
    render(){
        return (
            <div className="amendments__item">
              <div className="amendments__item__content">
                <div className="container">
                  <span className="amendments__item__content__icon">
                      <img src={'../../images/amendments/icons/' + this.props.icon + '.svg'} />
                  </span>
                  <h2 className="amendments__item__content__title">{ this.props.text }</h2>
                  <div className="amendments__item__content__info">
                    <div className="amendments__item__content__info__no">NO</div>
                    <span dangerouslySetInnerHTML={{__html: this.props.t('AMENDMENT_INFO', { num: this.props.id })}}></span>
                  </div>
                </div>
              </div>
          </div>
        )
    }
}

export default translate('Amendment')(Amendment);
