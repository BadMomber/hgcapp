/*
  Fish
  <Fish />
*/

import React from 'react';
import h from '../helpers';
import autobind from 'autobind-decorator';
import classNames from 'classnames';

@autobind
class Fish extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      summarized: true
    };
  }

  onButtonClick() {
    var key = this.props.index;
    this.props.addToOrder(key);
  }

  toggleSummary() {
    console.log(this.state.summarized);
    if (this.state.summarized === true) {
      return this.setState({ summarized: false });
    }
    return this.setState({ summarized: true });
  }

  render() {
    var details = this.props.details;
    /*
    var isAvailable = (details.status === 'available' ? true : false);
    */
    var buttonText = ('Bestellen');

    return (
      <li className="menu-fish" ref="fish">
        <h3 className="fish-name">
          {details.name}
          <span className="price">{h.formatPrice(details.price)}</span>
        </h3>
        <p className="teaser">{details.teaser}</p>
        <button onClick={this.toggleSummary}>Details</button>
        <div className={classNames({ hidden: this.state.summarized })}>
          <p className="details">{details.desc}</p>
          <br />
          <p className="details">{details.desc1}</p>
          <br />
          <p className="details">{details.desc2}</p>
          <br />
          <p className="details">{details.desc3}</p>
          <input type="text" placeholder="Änderungswünsche" />
        </div>
        <button onClick={this.onButtonClick}>{buttonText}</button>
      </li>
    )
  }
};


export default Fish;
