import './App.css';
import React, {Component} from "react";
import Main from './components/Maincomponent';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();


class App extends Component{

  constructor(props){
    super(props);


  } 

  render(){

    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
      
      
    );

  }

}

export default App;
