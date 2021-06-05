import React, { useState } from "react";
import addPost from "./Body";
import { PROMPTS } from "../shared/prompts";
import { postBox } from "./Style";
import { Button, Form, Col, FormGroup, Input } from "reactstrap";

const pickPost = PROMPTS.map((prompt) => `${prompt.promptQ}`);
const todaysPost = pickPost[0];

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postInput: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      postInput: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("Today's post: " + JSON.stringify(this.state.postInput));
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="container p-4" style={postBox}>
          <Col>
            <h5 className="text-center">{todaysPost}</h5>
          </Col>
          <Form addPost={addPost}>
            <FormGroup row>
              <Input
                type="textarea"
                id="postInput"
                name="postInput"
                className="mt-2"
                placeholder="Type your thoughts here..."
                value={this.state.postInput}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup row>
              <Button
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
                className="btn-lg text-center mx-auto d-block mt-3"
              >
                <i className="fa fa-pencil fa-lg" />
              </Button>
            </FormGroup>
          </Form>
        </div>
      </>
    );
  }
}

export default PostForm;
