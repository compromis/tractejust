import React from 'react';
import { translate } from "react-translate";

import SVGPeople from 'react-svg-inline-loader!../../images/icon-people.svg';
import SVGPIB from 'react-svg-inline-loader!../../images/icon-pib.svg';
import SVGMoney from 'react-svg-inline-loader!../../images/icon-money.svg';


class Percentages extends React.Component {

  render() {
    return (
      <div className="block percentages">
        <a href="http://www.abc.es/local-comunidad-valenciana/20150131/abci-montoro-financiacion-201501311558.html" target="_blank" className="heading heading--abc">
          <span className="heading__source">
            <img src="/images/map/abc.png" />
          </span>
          <span className="heading__text">
            Montoro admite que la Comunidad Valenciana es la peor financiada de España
          </span>
        </a>

        <hr />


        <div className="row percentages__numbers">
          <div className="col-xs-4">11%</div>
          <div className="col-xs-4">10%</div>
          <div className="col-xs-4 percentages__number--red">3,5%</div>
        </div>
        <div className="row percentages__icons">
          <div className="col-xs-4">
            {<SVGPeople />}
          </div>
          <div className="col-xs-4">
            {<SVGPIB />}
          </div>
          <div className="col-xs-4">
            {<SVGMoney />}
          </div>
        </div>
        <div className="row percentages__legend">
          <div className="col-xs-4">{this.props.t('POPULATION')}</div>
          <div className="col-xs-4">{this.props.t('GDP')}</div>
          <div className="col-xs-4 percentages__number--red">{this.props.t('ACTUAL')}</div>
        </div>
        <hr />
        <p dangerouslySetInnerHTML={{__html: this.props.t('TEXT')}}></p>
      </div>
    );
  }
}

export default translate('Percentages')(Percentages);
