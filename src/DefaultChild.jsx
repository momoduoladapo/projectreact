import React, { Component } from 'react';

class DefaultChild extends Component {

  componentDidMount() {
    console.log('Default Child Mounted');
  }

  render() {

    return (
      <div>
        Default
      </div>
    );

  }
}

export default DefaultChild;
