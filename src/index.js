import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';


class AmendmentsRoulette extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div>
        <h1>Title</h1>

      </div>
    );
  }
}

ReactDOM.render(
  <AmendmentsRoulette />,
  document.getElementById('AmendmentsRoulette')
);
