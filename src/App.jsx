import React, {Component} from 'react';
import NameComponent from './components/NameComponents';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user_name: 'Victor',
      profession: 'Programmer'
    };
  }

  componentDidUpdate() {
    console.log('Changed');
  }

  componentDidMount() {
    console.log('Mounted')
  }

  handleClick() {
    this.setState({
      user_name: "Victor Temprano",
      profession: 'Academic'
    });
  }

  render() {

    const {array} = this.state;

    const style = {fontSize: '40px'};

    return (
      <div className="header">
        <p style={style}>
          {this.state.user_name} - {this.state.profession}
        </p>

        <NameComponent  user_name={this.state.user_name}/>
        <button onClick={this.handleClick.bind(this)}>
          <NameComponent />
        </button>
      </div>
    );
  }
}

export default App