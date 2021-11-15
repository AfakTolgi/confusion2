import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

  
  function RenderDish({dish}) {
    return(
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  function RenderComments({dishcomments}) {
    const Comments = dishcomments.map((commentss)=>{
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
    return (
      <div className='col-12 col-md-5 m-1'>
        <h4>Comments</h4>
        {Comments}  
      </div>
    );
  }

  const  Detaildish = (props) => {
    if (props.dish!=null){
      return(
        <div className="container">
          <div className='row'>
            <Breadcrumb>
              <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>

            </Breadcrumb>
            <div className='col-12'>
              <h3>{props.dish.name}</h3>
              <hr/>

            </div>
          </div>
          <div className="row">
            <RenderDish dish={props.dish}/>
            <RenderComments dishcomments={props.comments}/>
          </div>
        </div>
        
      ); 
    }else{
      return (
        <div></div>
      );
    }
  }

export default Detaildish;