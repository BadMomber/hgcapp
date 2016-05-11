/*
  Order
  <Order/>
*/

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import h from '../helpers';
import autobind from 'autobind-decorator';

@autobind
class Order extends React.Component {
  renderOrder(key) {
    var fish = this.props.fishes[key];
    var count = this.props.order[key];
    var removeButton = <button onClick={this.props.removeFromOrder.bind(null,key)}>&times;</button>

    if(!fish) {
      return <li key={key}>Dieser Posten ist leider nicht mehr verfügbar {removeButton}</li>
    }

    return (
      <li key={key}>
        <span>
          <CSSTransitionGroup component="span" transitionName="count" transitionLeaveTimeout={250} transitionEnterTimeout={250} className="count">
            <span key={count}>{count}</span>
          </CSSTransitionGroup>

           x {fish.name} {removeButton}
        </span>
        <span className="price">{h.formatPrice(count * fish.price)}</span>
      </li>)
  }

  render() {
    var orderIds = Object.keys(this.props.order);

    var total = orderIds.reduce((prevTotal, key)=> {
      var fish = this.props.fishes[key];
      var count = this.props.order[key];
      /*
      var isAvailable = fish && fish.status === 'available';
      */
      if(fish) {
        return prevTotal + (count * parseInt(fish.price) || 0);
      }

      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <img className="logo" src="http://herrngarten.cafe/wp-content/uploads/2015/12/Logo-Farbe.jpg" alt="HGC" />
        <h2 className="order-title">Ihre Auswahl</h2>

        <CSSTransitionGroup
              className="order"
              component="ul"
              transitionName="order"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {h.formatPrice(total)}
          </li>
          <li className="vamap"><a href="../uploads/Veranstaltungskatalog_2016.pdf" target="_blank">Detaillierte Veranstaltungsmappe als PDF</a></li>
        </CSSTransitionGroup>

      </div>
    )
  }

};

Order.propTypes = {
  fishes : React.PropTypes.object.isRequired,
  order : React.PropTypes.object.isRequired,
  removeFromOrder : React.PropTypes.func.isRequired
}

export default Order;
