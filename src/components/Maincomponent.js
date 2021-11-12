import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Menucomponents';
import { DISHES } from '../shared/dishes';
import React, {Component} from "react";
import Detaildish from "./detaildishcomponents";

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
        <Navbar dark color="primary">
          <div className="container">
              <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={ this.state.dishes } onClick = {(dishId) => this.onDishSelect(dishId)} />
        <Detaildish dish = {this.state.dishes.filter((dish)=>dish.id===this.state.selecteddish)[0]}/>
      </div>
    );

  }

}

export default Main;
