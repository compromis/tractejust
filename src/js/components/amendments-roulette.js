import React from 'react';
import _ from 'lodash';
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
      this.randomAmendment();
  }

  randomAmendment(){
      const max = _.size(this.state.amendments);
      var random = Math.floor(Math.random() * max) + 1;

      this.setState({
          onScreenAmendment: this.state.amendments[random]
      });
  }

  handleClick(e){
    e.preventDefault();
    this.randomAmendment();
  }

  render() {
    return (
      <section className="amendments">
        <div className="amendments__image" style={{backgroundImage: 'url(/images/amendments/backgrounds/rodalies.jpeg)'}}></div>
        <div className="amendments__overlay"></div>
        <div className="amendments__content">
          <div className="container">
            <h1 className="amendments__header">amb un <a href="">#TracteJust</a>, podriem <br /> desenvolupar projectes com...</h1>
            <span className="amendments__icon"><img src={Icon} /></span>
            <h2 className="amendments__title">{ this.state.onScreenAmendment.text }</h2>
            <div className="amendments__info">
              Esmena <u>#4545</u> presentada al <strong>Congrés dels Diputats</strong> per <strong>Compromís</strong> i rebutjada amb els vots de <strong>PP</strong> i <strong>Ciudadanos</strong>
            </div>
            <a href="" className="amendments__button btn btn-default" onClick={(e) => this.handleClick(e)}>Una nova</a>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = AmendmentsRoulette;
