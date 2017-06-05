import React from 'react';

import amendments from '../../data/amendments.json';

class AmendmentsRoulette extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amendments: amendments,
    };
  }

  render() {
    console.log('amend', amendments);
    return (
      <section className="amendments-roulette">
        <div className="container">
          <h1>Title</h1>
        </div>
      </section>
    );
  }
}

module.exports = AmendmentsRoulette;
