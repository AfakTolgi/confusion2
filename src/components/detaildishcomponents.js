import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './Loadingcomponent';
import {baseUrl} from '../shared/baseUrl';
import {Fade, Stagger, FadeTransform} from 'react-animation-components';
  
  function RenderDish({dish}) {
    return(
      <div className="col-12 col-md-5 m-1">
        <FadeTransform in 
          transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
          }}>
          <Card>
            <CardImg top src={baseUrl+dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      </div>
    );
  }

  function RenderComments({dishcomments,postComment, dishId}) {
    const Comments = dishcomments.map((commentss)=>{
      return (
        <ul class = "list-unstyled">
          <Fade in>
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
          </Fade>
        </ul>
      );

    });
    return (
      <div className='col-12 col-md-5 m-1'>
        <h4>Comments</h4>
        <Stagger in>
          {Comments}
        </Stagger>
        <CommentForm dishId={dishId} postComment={postComment}/>

      </div>
    );
  }

  const  Detaildish = (props) => {
    if (props.isLoading){
      return (
        <div className='container'>
          <div className='row'>
            <Loading/>
          </div>
        </div>
      );
    }
    else if (props.errMess){
      return(
        <div className="container">
            <div className="row">            
                <h4>{props.errMess}</h4>
            </div>
        </div>
      );
    }
    else if (props.dish!=null){
      return(
        <div className="container">
          <div className='row'>
            <Breadcrumb>
              <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>

            </Breadcrumb>
            <div className='col-12'>
              <h3>{props.dish.name}</h3>
              <hr/>

            </div>
          </div>
          <div className="row">
            <RenderDish dish={props.dish}/>
            <RenderComments dishcomments={props.comments} postComment={props.postComment} dishId={props.dish.id}/>
          </div>
        </div>
        
      ); 
    }else{
      return (
        <div></div>
      );
    }
  }

const required = (val)=> val && val.length;
const minLength =(len) => (val) => !(val) || (val.length>len);
const maxLength =(len) => (val) => !(val) || (val.length<len);

class CommentForm extends Component{
  constructor(props){
    super(props);
    this.state={
      isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  handleSubmit(values){
    this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    alert('cuur'+JSON.stringify(values));
  }


  render(){
    return(
      <React.Fragment>
        <Button outline onClick={this.toggleModal}>
          <span className='fa fa-pencil'></span>
          Submit
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit comment</ModalHeader>
          <ModalBody>
            <div className='container'>
            <LocalForm onSubmit={(values=>this.handleSubmit(values))}>
              <Row className='form-group'>
                <Label htmlFor='rating'><strong>Ratings</strong></Label>
                <Control.select model='.rating' name='rating' className='form-control'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Row>
              <Row className='form-group'>
                <Label htmlFor='author'><strong>Your Name</strong></Label>
                <Control.text className='form-control' model='.author' name='author' id='author' placeholder='Enter name' validators={{required,maxLength:maxLength(15),minLength:minLength(3)}}/>
                <Errors
                  className='text-danger'
                  model='.author'
                  show='touched'
                  messages={{
                    required:'Please enter name',
                    minLength:'Please more min 3 char',
                    maxLength:'Please less than 15 char'
                  }}
                />
              </Row>
              <Row className='form-group'>
                <Label htmlFor='comment'><strong>Comments</strong></Label>
                <Control.textarea model=".comment" id="comment" name="comment" rows="6"            className="form-control"/>
              </Row>
              <Row className="form-group">
                  <Button type="submit" color="primary">
                  Submit
                  </Button>
              </Row>

            </LocalForm>

            </div>
            
          </ModalBody>
        </Modal>
      </React.Fragment>
      
    );

  }
}

export default Detaildish;