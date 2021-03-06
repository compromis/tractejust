import React from 'react';
import createReactClass from 'create-react-class';

const DefaultDecorators = [
  {
    component: createReactClass({
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround)}
            className="amendments__nav amendments__nav--prev hidden-xs"
            onClick={this.handleClick}><span className="glyphicon glyphicon-chevron-left"></span></button>
        )
      },
      handleClick(e) {
        e.preventDefault();
        this.props.previousSlide();
      },
      getButtonStyles(disabled) {
        return {
          opacity: disabled ? 0.3 : null,
        }
      }
    }),
    position: 'CenterLeft'
  },
  {
    component: createReactClass({
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount && !this.props.wrapAround)}
            className="amendments__nav amendments__nav--next hidden-xs"
            onClick={this.handleClick}><span className="glyphicon glyphicon-chevron-right"></span></button>
        )
      },
      handleClick(e) {
        e.preventDefault();
        this.props.nextSlide();
      },
      getButtonStyles(disabled) {
        return {
          opacity: disabled ? 0.3 : null,
        }
      }
    }),
    position: 'CenterRight'
  },
  {
    component: createReactClass({
      render() {
        return (
          <div className="amendments__button">
            <button className="btn btn-default" onClick={this.handleClick}><span className="glyphicon glyphicon glyphicon-refresh"></span> { language == 'es' ? '¿Qué más?' : 'Què més?' }</button>
          </div>
        )
      },
      getRandomSlide(){
        let random = Math.floor(Math.random() * (this.props.slideCount));

        if(random == this.props.currentSlide){
          return this.getRandomSlide();
        } else {
          return random;
        }

      },
      handleClick(e) {
        e.preventDefault();
        let random = this.getRandomSlide();
        this.props.goToSlide(random);
      },
    }),
    position: 'BottomCenter'
  }/*,
  {
    component: createReactClass({
      render() {
        var self = this;
        var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
        return (
          <ul style={self.getListStyles()}>
            {
              indexes.map(function(index) {
                return (
                  <li style={self.getListItemStyles()} key={index}>
                    <button
                      style={self.getButtonStyles(self.props.currentSlide === index)}
                      onClick={self.props.goToSlide.bind(null, index)}>
                      &bull;
                    </button>
                  </li>
                )
              })
            }
          </ul>
        )
      },
      getIndexes(count, inc) {
        var arr = [];
        for (var i = 0; i < count; i += inc) {
          arr.push(i);
        }
        return arr;
      },
      getListStyles() {
        return {
          position: 'relative',
          margin: 0,
          top: -10,
          padding: 0
        }
      },
      getListItemStyles() {
        return {
          listStyleType: 'none',
          display: 'inline-block'
        }
      },
      getButtonStyles(active) {
        return {
          border: 0,
          background: 'transparent',
          color: 'black',
          cursor: 'pointer',
          padding: 10,
          outline: 0,
          fontSize: 24,
          opacity: active ? 1 : 0.5
        }
      }
    }),
    position: 'BottomCenter'
  }*/
];

export default DefaultDecorators;
