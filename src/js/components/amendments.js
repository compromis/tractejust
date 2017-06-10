import React from 'react';
import Carousel from '../nuka-carousel/carousel'; // Modified nuka-carousel
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import { translate } from "react-translate";

import amendments from '../../data/amendments.json';

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


class Amendments extends React.Component {
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
      const max = Object.keys(this.state.amendments).length - 1;
      let random = Math.floor(Math.random() * max) + 1;
      return random;
  }

  scrollDown(e){
    e.preventDefault();

    let pos = $("#content").position();

    $("html, body").animate({
      scrollTop: (pos.top - 50)
    }, 500, 'swing');
  }

  render() {

    return (
        <section className="amendments noselect">
            <AmendmentImage current={this.state.currentAmendment} />
            <div className="amendments__overlay"></div>

            <h1 className="amendments__header">
              {this.props.t('HEADER_1')}
              <a href="#" onClick={(e) => this.scrollDown(e)}>{this.props.t('HASHTAG')}</a>
              {this.props.t('HEADER_2')}
              <br />
              {this.props.t('HEADER_3')}
            </h1>

            <Carousel ref="amendments"
                      className="amendments__items"
                      slideIndex={this.state.initialAmendment}
                      afterSlide={(index) => this.updateCurrentAmendment(index)}
                      easing="easeInOut"
                      edgeEasing="easeOutCirc">
                { this.state.amendments.map(function(amendment, i){
                    return <Amendment key={i} id={amendment.id} text={language == 'es' ? amendment.titleES : amendment.title } icon={amendment.icon} />;
                }.bind(this)) }
            </Carousel>
        </section>
    );
  }
}

export default translate('Amendments')(Amendments);
