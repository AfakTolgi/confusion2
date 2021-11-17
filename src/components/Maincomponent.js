
import Menu from './Menucomponents';

import React, {Component} from "react";
import Detaildish from "./detaildishcomponents";
import Header from './Headercomponent';
import Footer from './Footercomponents';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Home from './Homecomponent';
import Contact from './Contactcomponent';
import { connect } from 'react-redux';

import About from './Aboutuscomponent';

const mapStateToProps = state =>{
  return {
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}

class Main extends Component{

  constructor(props){
    super(props);

  }


  render(){

    const Homepage = () =>{
      return(
        <Home
          dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
          promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishwithId = ({match}) =>{
      return(
        <Detaildish dish ={this.props.dishes.filter((dish) => dish.id===parseInt(match.params.dishId,10))[0]}
          comments = {this.props.comments.filter((comment)=> comment.dishId===parseInt(match.params.dishId,10))}
        />
      );
    }

    return(
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={Homepage}/>
          <Route exact path='/menu' component={()=><Menu dishes={this.props.dishes}/>}/>
          <Route path='/menu/:dishId' component={DishwithId}/>
          <Route exact path='/contactus' component={Contact}/>
          <Route exact path='/aboutus' component={()=><About leaders ={this.props.leaders}/>}/>
          <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </div>
    );

  }

}

export default withRouter(connect(mapStateToProps)(Main));
