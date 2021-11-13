
import Menu from './Menucomponents';
import { DISHES } from '../shared/dishes';
import React, {Component} from "react";
import Detaildish from "./detaildishcomponents";
import Header from './Headercomponent';
import Footer from './Footercomponents';

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selecteddish: null,
    };

  }

  onDishSelect(dishId) {
    this.setState({ selecteddish: dishId });
  }

  render(){

    return(
      <div>
        <Header/>
        <Menu dishes={ this.state.dishes } onClick = {(dishId) => this.onDishSelect(dishId)} />
        <Detaildish dish = {this.state.dishes.filter((dish)=>dish.id===this.state.selecteddish)[0]}/>
        <Footer/>
      </div>
    );

  }

}

export default Main;
