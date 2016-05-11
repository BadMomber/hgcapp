/*
  Add Fish Form
  <AddFishForm />
*/

import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class AddFishForm extends React.Component {
  createFish(event) {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Take the data from the form and create an object
    var fish = {
      name : this.refs.name.value,
      price : this.refs.price.value,
      desc : this.refs.desc.value,
      desc1 : this.refs.desc1.value,
      desc2 : this.refs.desc2.value,
      desc3 : this.refs.desc3.value
    }

    // 3. Add the fish to the App State
    this.props.addFish(fish);
    this.refs.fishForm.reset();
  }

  render() {
    return (
      <form className="fish-edit" ref="fishForm" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Name"/>
        <input type="text" ref="price" placeholder="Preis" />
        <textarea type="text" ref="desc" placeholder="Erster Gang"></textarea>
        <textarea type="text" ref="desc1" placeholder="Zweiter Gang"></textarea>
        <textarea type="text" ref="desc2" placeholder="Dritter Gang"></textarea>
        <textarea type="text" ref="desc3" placeholder="Dessert"></textarea>
        <button type="submit">+ Hinzufügen </button>
      </form>
    )
  }
};

export default AddFishForm;
