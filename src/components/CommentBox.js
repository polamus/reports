import React, {Component} from 'react';
import CommentList from "../components/CommentList"
import CommentForm from "../components/CommentForm"
import $ from 'jquery'; 
import Api from "../api/Api";
import axios from 'axios';



export default class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state ={
			data: []
		}

	this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

	}

  handleCommentSubmit(comment) {

    window.fetch('/api/comments', {
    method: "POST",
    mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(comment), //
  })
}
  getInitialState() {
    return {data: []};
  }

	render(){
    debugger;
		return (
      <div className="commentBox, text-center" >
       <h2 id='line'><span>Reviews</span></h2>
       <br/>
          <CommentList data={this.props.lists}/>
          <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
	}
}