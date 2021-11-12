import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardImgOverlay,
  CardText,
} from "reactstrap";
import Detaildish from "./detaildishcomponents";

class Menu extends Component {
  constructor(props) {
    super(props);
  }


  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div>no dish found</div>;
    }
  }
  
  render() {

    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card
            key={dish.id}
            onClick={() => this.props.onClick(dish.id)}
          >
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
      </div>
    );
  }
}

export default Menu;
