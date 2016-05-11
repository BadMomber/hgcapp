/*
  Header
  <Header/>
*/

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>Unser Angebot</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
}

Header.propTypes = {
  tagline : React.PropTypes.string.isRequired
}

export default Header;
