import { Component } from "react";
import {Form, Col,Button} from 'react-bootstrap'

class AddComments extends Component {
  state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: this.props['elementId']
    },
  };

  inputChange = (event) => {
    let id = event.target.id;

    this.setState({
      comment: {
        ...this.state.comment,
        [id]: event.target.value,
      },
    });
  };

  postComment = async (event) => {
    event.preventDefault();
    const url = "https://striveschool-api.herokuapp.com/api/comments/";
   try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(this.state.comment),

        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2JhOWNlYWY0ODAwMTVjOTE4NjYiLCJpYXQiOjE2MjI3OTg2NzksImV4cCI6MTYyNDAwODI3OX0.V8KJrn1i0Rq_N_xOj3dtZ9oHmcfsYcUrnb7KD9-0JG8",
            "Content-type": "application/json"
        },
      });
      console.log(response)
      alert('comment added successfully')
      if (response.ok) {
        this.setState({
            comment: {
                comment: '',
                rate: '',
                elementId: ""
                // elementId: this.props.imdbID
            }
        })
       /*  this.props.commentsUpdated() */
    } else {
        console.log('Error with POST request')
    }
    } catch (error) {}
  };

  refresh =()=>{
    window.location.reload();
}

  render() {
    return (
        <Form onSubmit={(e) => this.postComment(e)} className="pt-2 mt-2 border-top border-dark">
        <Form.Row>
            <Col>
                <Form.Control 
                required
                as="textarea"
                rows={5} 
                placeholder="Write your comment here..." 
                value={this.state.comment.comment} 
                id="comment" 
                onChange={e => this.inputChange(e)} />
            </Col>
        </Form.Row>
        <Form.Row className="d-flex mt-4">
            <Col>
                <Form.Control
                required 
                as="select" 
                className = "align-items-center" 
                defaultValue="Rating..." 
                value={this.state.comment.rate} id="rate" 
                onChange={e => this.inputChange(e)} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Col>
        
        </Form.Row>
        <Form.Row>
        <Form.Control
                            type="text"
                            placeholder="Enter Book Id"
                            style={{visibility:"hidden"}}
                            id='elementId'
                            value={this.state.comment.elementId}
                            onChange={e => this.inputChange(e)}
                            
                        />

        </Form.Row>
        <Button 
        variant="primary" 
        type="submit" 
        id="sendBtn" 
        className = "btn btn-success"
        >Add Comment</Button>
    </Form>
    );
  }
}
export default AddComments