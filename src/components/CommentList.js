import React, {Component} from 'react';
import Comment from "../components/Comment"
import {Row, Col, Label, FormGroup, Input, Button} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';




export default class CommentList extends Component {
	constructor(props) {
		super(props);

	}

	render(){
      debugger;
		return (
      <div className="commentList">
         {this.props.data.map((s) =>
         	 <Row className = 'comment-list'>
         	 <Col>
         	 <Col></Col>
         	  <Col className = 'author text-left'>
         	  <Row>
         	    <Col>
         	      {s.name} 
         	    </Col>
         	    <Col></Col>
         	    <Col>
         	    <StarRatingComponent 
	             name="rate1" 
	             starCount={5}
	             value={s.rating}
	           />
         	    </Col>
         	  </Row>
         	   
         	  </Col>

         	  <Col className='comment text-left'>
         	  {s.description}
         	  </Col>
         	  <Col></Col>
         	  <hr/>
         	  </Col>
         	</Row>
         	)}
      </div>
    );
	}
}