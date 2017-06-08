import React from 'react';

import SVGPeople from 'react-svg-inline-loader!../../images/icon-people.svg';
import SVGPIB from 'react-svg-inline-loader!../../images/icon-pib.svg';
import SVGMoney from 'react-svg-inline-loader!../../images/icon-money.svg';


class Percentages extends React.Component {

  render() {
    return (
      <div className="block percentages">
        <a href="" target="_blank" className="heading heading--abc">
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
          <div className="col-xs-4">POBLACIÓ</div>
          <div className="col-xs-4">PIB</div>
          <div className="col-xs-4 percentages__number--red">INVERSIÓ REAL</div>
        </div>
        <hr />
        <p>Al territori valencià som l'<strong>11% de tota la població</strong> de l'Estat i representem el <strong>10% del PIB</strong>. Però, només rebem un <strong>6,5% del total de les inversions</strong> territorialitzades pressupostades, i d'estes inversions, el govern central només va executar la mitat en 2016, és a dir, que en aquell any, únicament vàrem rebre un <strong>3,5% de totes les inversions</strong> de l'Estat.</p>
      </div>
    );
  }
}

export default Percentages;
