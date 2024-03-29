/*
  Inventory
  <Inventory/>
*/

import React from 'react';
import AddFishForm from './AddFishForm';
import autobind from 'autobind-decorator';
import Firebase from 'firebase';

/*
Link Login of firebase

const ref = new Firebase('https://catch-of-the-day.firebaseio.com/');

*/

@autobind
class Inventory extends React.Component {

  constructor() {
    super();

    this.state = {
      uid : ''
    }
  }
/*
  authenticate(provider) {
    console.log("Trying to auth with" + provider);
    ref.authWithOAuthPopup(provider, this.authHandler);
  }

  componentWillMount() {
    console.log("Checking to see if we can log them in");
    var token = localStorage.getItem('token');
    if(token) {
      ref.authWithCustomToken(token,this.authHandler);
    }
  }

  logout() {
    ref.unauth();
    localStorage.removeItem('token');
    this.setState({
      uid : null
    });
  }

  authHandler(err, authData) {
    if(err) {
      console.error(err);
      return;
    }

    // save the login token in the browser
    localStorage.setItem('token',authData.token);

    const storeRef = ref.child(this.props.params.storeId);
    storeRef.on('value', (snapshot)=> {
      var data = snapshot.val() || {};

      // claim it as our own if there is no owner already
      if(!data.owner) {
        storeRef.set({
          owner : authData.uid
        });
      }

      // update our state to reflect the current store owner and user
      this.setState({
        uid : authData.uid,
        owner : data.owner || authData.uid
      });

    });
  }


  renderLogin() {
    return (
      <nav className="login">
        <h2>Inventory</h2>
        <p>Sign in to manage your store's inventory</p>
        <button className="github" onClick={this.authenticate.bind(this, 'github')}>Log In with Github</button>
        <button className="facebook"onClick={this.authenticate.bind(this, 'facebook')} >Log In with Facebook</button>
        <button className="twitter"onClick={this.authenticate.bind(this, 'twitter')} >Log In with Twitter</button>
      </nav>
    )
  }
  */

  renderInventory(key) {
    var linkState = this.props.linkState;
    return (
      <div className="fish-edit" key={key}>
        <input type="text" valueLink={linkState('fishes.'+ key +'.name')}/>
        <input type="text" valueLink={linkState('fishes.'+ key +'.price')}/>
        <textarea valueLink={linkState('fishes.' + key + '.desc')}></textarea>
        <textarea valueLink={linkState('fishes.' + key + '.desc1')}></textarea>
        <textarea valueLink={linkState('fishes.' + key + '.desc2')}></textarea>
        <textarea valueLink={linkState('fishes.' + key + '.desc3')}></textarea>

        <button onClick={this.props.removeFish.bind(null, key)}>- Entfernen</button>

      </div>
    )
  }

  render() {
  /*  let logoutButton = <button onClick={this.logout}>Log Out!</button>

    // first check if they arent logged in
    if(!this.state.uid) {
      return (
        <div>{this.renderLogin()}</div>
      )
    }

    // then check if they arent the owner of the current store
    if(this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, you aren't the owner of this store</p>
          {logoutButton}
        </div>
      )
    }
*/

// Add {logoutButton} in line 131 under <h2>inventory</h2>
    return (
      <div>
        <h2>Angebot verwalten</h2>

        {Object.keys(this.props.fishes).map(this.renderInventory)}

        <AddFishForm {...this.props} />
        <button onClick={this.props.loadSamples}>Hochzeitsmappe laden</button>
      </div>
    )
  }
};

Inventory.propTypes = {
    addFish : React.PropTypes.func.isRequired,
    loadSamples : React.PropTypes.func.isRequired,
    fishes : React.PropTypes.object.isRequired,
    linkState : React.PropTypes.func.isRequired,
    removeFish : React.PropTypes.func.isRequired
}

export default Inventory;
