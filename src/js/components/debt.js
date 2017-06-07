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
    let interval = setInterval(this.timer.bind(this), 250);
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
      number: this.state.number + 7
    });
  }

  render() {
    var myFormat = format({suffix: '€', integerSeparator: '.'});
    var formattedNumber = myFormat(this.state.number);

    return (
      <div className="block debt">

        {formattedNumber}
      </div>
    );
  }
}

export default Debt;

/*
$(document).ready(function(){
	var current = 0;
	$("#amount").html('0,00 €');
	setInterval(function(){
	   current += 0.02;
	   var amount = formatMoney(current);
	   $("#amount").html(amount);
	},2);
});

function formatMoney(amount) {
    var dollars = Math.floor(amount).toString().split('');
    var cents = (Math.round((amount%1)*100)/100).toString().split('.')[1];
    if(typeof cents == 'undefined'){
        cents = '00';
    }else if(cents.length == 1){
        cents = cents + '0';
    }
    var str = '';
    for(i=dollars.length-1; i>=0; i--){
        str += dollars.splice(0,1);
        if(i%3 == 0 && i != 0) str += '.';
    }
    return str + ',' + cents + ' €';
}
*/
