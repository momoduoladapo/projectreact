import React, { Component } from 'react';

class OtherChild extends Component {

  componentDidMount() {
    console.log('Other Child Mounted');
  }
  render() {
  
    return (
      <div>
        Other
      </div>
    );

  }
}

export default OtherChild;
