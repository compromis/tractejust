import React from 'react';
import _ from 'lodash';
import amendments from '../../data/amendments.json';
import Carousel from '../nuka-carousel/carousel'; // Modified nuka-carousel
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import { translate } from "react-translate";

import Amendment from './amendment.js';

class AmendmentImage extends React.Component {
  render(){

    return(
      <div className="amendments__images">
        <ReactCSSTransitionReplace
          transitionName="cross-fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div key={this.props.current.id} className="amendments__image" style={{backgroundImage: 'url(/images/amendments/backgrounds/' + this.props.current.background + '.jpg)'}}></div>
        </ReactCSSTransitionReplace>
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
      currentAmendment: amendments[0]
    };
  }

  componentDidMount(){
      this.initialAmendment();
  }

  initialAmendment(){
      let random = this.getRandomAmendment();
      this.setState({
          initialAmendment: random,
          currentAmendment: amendments[random]
      });
  }

  updateCurrentAmendment(index){
    this.setState({
        currentAmendment: amendments[index]
    });
  }

  getRandomAmendment(){
      const max = _.size(this.state.amendments) - 1;
      let random = Math.floor(Math.random() * max) + 1;
      return random;
  }

  render() {

    return (
        <section className="amendments noselect">
            <AmendmentImage current={this.state.currentAmendment} />
            <div className="amendments__overlay"></div>

            <h1 className="amendments__header">
              {this.props.t('HEADER_1')}
              <a href="">{this.props.t('HASHTAG')}</a>
              {this.props.t('HEADER_2')}
              <br />
              {this.props.t('HEADER_3')}
            </h1>

            <Carousel ref="amendments" className="amendments__items" slideIndex={this.state.initialAmendment} easing="easeInOut" edgeEasing="easeOutCirc" updateCurrentAmendment={(index) => this.updateCurrentAmendment(index)}>
                { this.state.amendments.map(function(amendment, i){
                    return <Amendment key={i} id={amendment.id} text={amendment.title} icon="TREN" background="/images/amendments/backgrounds/rodalies.jpeg" />;
                }.bind(this)) }
            </Carousel>
        </section>
    );
  }
}

export default translate('CarouselWidget')(CarouselWidget);
