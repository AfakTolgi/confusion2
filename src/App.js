import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import React, {Component} from "react";
import Main from './components/Maincomponent';

class App extends Component{

  constructor(props){
    super(props);


  } 

  render(){

    return(
      <div>
        <Main/>
      </div>
    );

  }

}

export default App;
