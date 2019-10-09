import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NameComponent from './components/NameComponents.jsx';

class App extends Component {

  componentDidMount() { 
    console.log("App Mounted"); 
  }

  render() {

    let word = 'Hello';
    let style = {fontSize: '20px'};

    const array = ['Welcome','To','My','Course'];

      return (
        <div>
          <p style ={style} className="text-large">Hi</p>

          {array.map(word => {
            return(
              <p name={word} className={word} id={word} key={word}>{word}</p>
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
