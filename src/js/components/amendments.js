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

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  componentDidMount(){
      let shuffledAmendments = this.shuffle(this.state.amendments);

      this.setState({
        amendments: shuffledAmendments
      }, this.initialAmendment);

  }

  initialAmendment(){
      let random = this.getRandomAmendment();
      this.setState({
          initialAmendment: random,
          currentAmendment: this.state.amendments[random]
      });
  }

  updateCurrentAmendment(index){
    this.setState({
        currentAmendment: this.state.amendments[index]
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

            {/*<div className="amendments__learn-more">
              <a href="#" onClick={(e) => this.scrollDown(e)}>{this.props.t('LEARN_MORE')}</a>
            </div>*/ }
        </section>
    );
  }
}

export default translate('Amendments')(Amendments);
