import { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardImgOverlay,
  CardText
} from 'reactstrap';

class Detaildish extends Component{
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.dish!=null){

      const Comments = this.props.dish.comments.map((commentss)=>{
        return (
          <ul class = "list-unstyled">
            <li key={commentss.id}>
              <p>{commentss.comment}</p>
              <p>-- {commentss.author},
              &nbsp;
              {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
              }).format(new Date(commentss.date))}
              </p>
            </li>
          </ul>
        );
      });
      return(
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className='col-12 col-md-5 m-1'>
            <h4>Comments</h4>
            {Comments}
      
          </div>
        </div>
        
      );
      
    }else{
      return (
        <div></div>
      );
    }
  }
}
export default Detaildish;