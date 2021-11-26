import React from "react";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import {FadeTransform} from 'react-animation-components';

import { Loading } from './Loadingcomponent';

import {baseUrl} from '../shared/baseUrl';

function RenderCard({items, isLoading, errMess}) {
  if(isLoading){
    return (
      <Loading/>
    );
  }
  else if (errMess){
    return (
      <h4>{errMess}</h4>
    );
  }
  else
    console.log(items);
    return (
      <FadeTransform in 
          transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
          }}>
        <Card>
          <CardImg src={baseUrl + items.image} alt={items.name}/>
          <CardBody>
            <CardTitle>{items.name}</CardTitle>
            {items.designation ? <CardSubtitle>{items.designation}</CardSubtitle> : null}
            <CardText>{items.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  
}
function Home(props){
  return(
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard items ={props.dish} isLoading={props.dishesLoading} errMess ={props.dishErrMess}/>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard items ={props.promotion} isLoading={props.promoLoading} errMess ={props.promoErrMess}/>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard items ={props.leader} isLoading={props.leaderLoading} errMess ={props.leaderErrMess}/>
        </div>
      </div>
    </div>
  );
}

export default Home;