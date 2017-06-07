import React from 'react';

import SVGPeople from 'react-svg-inline-loader!../../images/icon-people.svg';
import SVGPIB from 'react-svg-inline-loader!../../images/icon-pib.svg';
import SVGMoney from 'react-svg-inline-loader!../../images/icon-money.svg';


class Percentages extends React.Component {

  render() {
    return (
      <div className="block percentages">
        <span className="heading heading--abc">
          <span className="heading__source">
            <img src="/images/map/abc.png" />
          </span>
          <span className="heading__text">
            Montoro admite que la Comunidad Valenciana es la peor financiada de España
          </span>
        </span>

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
          <div className="col-xs-4">POBLACIÓ</div>
          <div className="col-xs-4">PIB</div>
          <div className="col-xs-4 percentages__number--red">INVERSIÓ REAL</div>
        </div>
      </div>
    );
  }
}

export default Percentages;
