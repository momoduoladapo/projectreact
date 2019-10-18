import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Select from 'react-select';



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  componentDidMount() {
    console.log('Mounted')
  }
  
  handleChange(selectedOption) {
    this.setState({
      selectedOption : selectedOption ? selectedOption : ''
    });
  }

  render() {


    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Dapo's Page</h1>
              <p>Here we'll list some data from a bunch of smokin' sources</p>
              <Select 
                name="form-field-name"
                value={this.state.selectedOption.value}
                onChange={this.handleChange.bind(this)}
                options={[
                  {value: 'one', label: 'One'},
                  {value: 'two', label: 'Two'},
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App