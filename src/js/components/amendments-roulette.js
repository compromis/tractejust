import React from 'react';

import amendments from '../../data/amendments.json';
import Icon from '../../images/amendments/icons/TREN.svg';

class AmendmentsRoulette extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amendments: amendments,
      onScreenAmendment: {}
    };
  }

  componentDidMount(){

  }

  render() {
    console.log('amend', amendments);
    return (
      <section className="amendments">
        <div className="amendments__image" style={{backgroundImage: 'url(/images/amendments/backgrounds/rodalies.jpeg)'}}></div>
        <div className="amendments__overlay"></div>
        <div className="amendments__content">
          <div className="container">
            <h1 className="amendments__header">amb un <a href="">#TracteJust</a>, podriem <br /> desenvolupar projectes com...</h1>
            <span className="amendments__icon"><img src={Icon} /></span>
            <h2 className="amendments__title">Construcció de la línia de tren entre Castelló i Vinaròs</h2>
            <div className="amendments__info">
              Esmena <u>#4545</u> presentada al <strong>Congrés dels Diputats</strong>
              per <strong>Compromís</strong> i rebutjada amb els vots de <strong>PP</strong> i <strong>Ciudadanos</strong>
            </div>
            <a href="" className="amendments__button btn btn-default">Una nova</a>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = AmendmentsRoulette;
