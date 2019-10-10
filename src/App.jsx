import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NameComponent from './components/NameComponents.jsx';

class App extends Component {

  componentDidMount() { 
    console.log("App Mounted"); 
  }

  render() {

    const style = {fontSize: '40px'};
    const array = ['fix','them','bugs'];

      return (
        <div className="header">
          <p style ={style}>
            I really love writing React!
          </p>

          {array.map(word => {
            return(
              <p key={word}>{word}</p>
            )
          })}

          <NameComponent />
          <button onClick={() => {console.log('Hooray!!! Name Component Mounted On The App')}} >
            <NameComponent />
          </button> 
        </div>
    );
  }
}

export default App;
