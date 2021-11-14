
import Menu from './Menucomponents';
import { DISHES } from '../shared/dishes';
import React, {Component} from "react";
import Detaildish from "./detaildishcomponents";
import Header from './Headercomponent';
import Footer from './Footercomponents';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Homecomponent';

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
    };

  }

  render(){

    const Homepage = () =>{
      return(
        <Home/>
      );
    }

    return(
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={Homepage}/>
          <Route path='/menu' component={()=><Menu dishes={this.state.dishes}/>}/>
          <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </div>
    );

  }

}

export default Main;
