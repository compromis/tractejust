import React from 'react';
import { translate } from "react-translate";

import format from 'format-number';

class DebtCounter extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      number: 16000000000
    }
  }

  componentDidMount(){
    let interval = setInterval(this.timer.bind(this), 200);
    let firstDate = new Date(2017, 1, 1);
    let secondDate = new Date();
    let numDays = Math.round((secondDate-firstDate)/(1000*60*60*24));

    let initNumber = 16000000000 + (numDays * 2739726);
    this.setState({
      number: initNumber,
      interval: interval
    });
  }

  componentWillUnMount(){
    clearInterval(this.state.interval);
  }

  timer(){

    this.setState({
      number: this.state.number + 1.7
    });
  }

  render(){
    var myFormat = format({suffix: '€', integerSeparator: '.', round: 0});
    var formattedNumber = myFormat(this.state.number);

    return <span>{formattedNumber}</span>;
  }
}

class Debt extends React.Component {

  render() {
    return (
      <div className="block debt">
        <h2>{this.props.t('HEADER')}</h2>
        <p><span dangerouslySetInnerHTML={{__html: this.props.t('PARAGRAPH_OVER')}}></span></p>
        <div className="debt__counter"><span className="glyphicon glyphicon-arrow-up"></span> <DebtCounter /></div>
        <p><span dangerouslySetInnerHTML={{__html: this.props.t('PARAGRAPH_UNDER')}}></span></p>
      </div>
    );
  }
}

export default translate('Debt')(Debt);
