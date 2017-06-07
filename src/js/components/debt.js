import React from 'react';

import format from 'format-number';

class Debt extends React.Component {
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

  render() {
    var myFormat = format({suffix: '€', integerSeparator: '.', round: 0});
    var formattedNumber = myFormat(this.state.number);

    return (
      <div className="block debt">
        <span className="debt__counter">{formattedNumber}</span>
      </div>
    );
  }
}

export default Debt;
