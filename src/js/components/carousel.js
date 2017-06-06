import React from 'react';
import _ from 'lodash';
import amendments from '../../data/amendments.json';
import Carousel from '../nuka-carousel/carousel'; // Modified nuka-carousel
import Icon from '../../images/amendments/icons/TREN.svg';

class Amendment extends React.Component {
    render(){
        return (
            <div className="amendments__item">
              <div className="amendments__item__image" style={{backgroundImage: 'url(' + this.props.background + ')'}}></div>
              <div className="amendments__item__overlay"></div>
              <div className="amendments__item__content">
                <div className="container">
                  <span className="amendments__item__content__icon"><img src={this.props.icon} /></span>
                  <h2 className="amendments__item__content__title">{ this.props.text }</h2>
                  <div className="amendments__item__content__info">
                    Esmena <u>#{this.props.id}</u> presentada al <strong>Congrés dels Diputats</strong> per <strong>Compromís</strong> i rebutjada amb els vots de <strong>PP</strong> i <strong>Ciudadanos</strong>
                  </div>
                </div>
              </div>
          </div>
        )
    }
}


class CarouselWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amendments: amendments,
      initialAmendment: 1,
      onScreenAmendment: 1
    };
  }

  componentDidMount(){
      this.initialAmendment();
  }

  randomAmendment(){
      let random = this.getRandomAmendment();
  }

  initialAmendment(){
      let random = this.getRandomAmendment();
      this.setState({
          initialAmendment: random
      });
  }

  getRandomAmendment(){
      const max = _.size(this.state.amendments) - 1;
      let random = Math.floor(Math.random() * max) + 1;
      return random;
  }

  handleClick(e){
    e.preventDefault();
    this.randomAmendment();
  }

  render() {
    const { goToSlide } = this.props;

    return (
        <section className="amendments noselect">
            <h1 className="amendments__header">
              amb un <a href="">#TracteJust</a>, podriem <br /> desenvolupar projectes com...
            </h1>

            <Carousel ref="amendments" slideIndex={this.state.initialAmendment} dragging={true} easing="easeInOut" edgeEasing="easeOutCirc">
                <Amendment id="345" text="Hello 0" icon={Icon} background="/images/amendments/backgrounds/rodalies.jpeg" />
                <Amendment id="345" text="Hello 1" icon={Icon} background="/images/amendments/backgrounds/rodalies.jpeg" />
                <Amendment id="345" text="Hello 2" icon={Icon} background="/images/amendments/backgrounds/rodalies.jpeg" />
                <Amendment id="345" text="Hello 3" icon={Icon} background="/images/amendments/backgrounds/rodalies.jpeg" />
                <Amendment id="345" text="Hello 4" icon={Icon} background="/images/amendments/backgrounds/rodalies.jpeg" />
            </Carousel>
        </section>
    );
  }
}

module.exports = CarouselWidget;
