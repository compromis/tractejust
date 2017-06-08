import React from 'react';

class TakeAction extends React.Component {

  render() {
    return (
      <div className="block take-action">
        <h2>Spread the word</h2>

        <p>Lorem ipsum...</p>

        <ul className="take-action__social-buttons">
          <li><a href="" className="take-action__social-button take-action__social-button--facebook"><span className="glyphicon glyphicon-share"></span> Comparteix en Facebook</a></li>
          <li><a href="" className="take-action__social-button take-action__social-button--twitter"><span className="glyphicon glyphicon-retweet"></span> Fes un tweet</a></li>
        </ul>
      </div>
    );
  }
}

export default TakeAction;
