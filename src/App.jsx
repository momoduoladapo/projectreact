// COPY THIS CODE INTO YOUR APP.JS
// MAKE SURE YOU MAKE A BACKUP OF YOUR CURRENT CODE FIRST
// CHANGE BACK AFTER YOU HAVE COMPLETED THE EXERCISE

// Fix the bugs in this code and make it render without any errors.

import React, { Component } from 'react';

class Apps extends Component {

  componentDidMount() {
    console.log('App Mounted');
  }

  iLikeFunctions() {
    console.log('yay functions');
  }

  render() {

    var array = ['here','we','go'];

    let no = 'yes';
    const display = 'My Name';

    return (
      <div>
        <p>{display}</p>
        <hr />
        <input type="text" onChange={this.iLikeFunctions} />
        <table>
          <tbody>
            {array.map((term,i) => {
              no = 'no';
              return (
                <tr key={i}>
                  <td>{term}</td>
                  <td>{no}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );

  }
}

export default Apps;
