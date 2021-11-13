import './App.css';
import React, {Component} from "react";
import Main from './components/Maincomponent';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';


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
