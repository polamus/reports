import React, {Component} from 'react';
import {Row, Col, Label, FormGroup, Input, Button} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';


export default class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			author: '',
      rating: 5
		}
		this.getInitialState = this.getInitialState.bind(this);
		this.updateName = this.updateName.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDescription = this.updateDescription.bind(this);

	}

	getInitialState(){
    return {author: '', text: ''};
  }
  
  handleSubmit(e) {
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    var rating = this.state.rating
    if (!text || !author) {
      return;
    }
    this.setState({author: '', text: ''});
    this.props.onCommentSubmit({author: author, text: text, rating: rating});
    window.location.reload();

  }

   onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }


  updateDescription(e) {
    this.setState({
      text: e.target.value
    })
  }

  updateName(e){
    this.setState({
      author: e.target.value
    })
  }

  

	render(){
    const { rating } = this.state;

		return (
      <div className='text-center'>
         <Row>
           <Col></Col>
             <Col>
              <FormGroup>
                <Label for ="description"> Name </Label>
                <Input type="text" name= "name" id="description" onChange={(e) => this.updateName(e)}/>
              </FormGroup>
            </Col> 
            <Col></Col> 
          </Row>  
       <Row>
         <Col></Col>
           <Col>
            <FormGroup>
              <Label for ="description"> Review </Label>
              <Input type="textarea" name= "description" id="description" onChange={(e) => this.updateDescription(e)}/>
            </FormGroup>

           
           <div>
           <Row>
           <Col>
           <h5>Star Me:</h5>
           </Col>
           <Col>
           <StarRatingComponent 
             name="rate1" 
             starCount={5}
             value={rating}
             onStarClick={this.onStarClick.bind(this)}
           />
           </Col>
           <Col></Col>
           </Row>
            </div>
            <button
              onClick = {e => this.handleSubmit()}
              className= "btn btn-primary">
              Submit Review
            </button>
          </Col> 
          <Col></Col> 
        </Row>  
      </div>  


    );
	}
}