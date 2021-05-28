import React from "react";
import { postBox } from "./Style";
import { Post } from "./Post";
import { Button, Form, FormFeedback } from "reactstrap";
import TodaysPost from "./TodaysPost";

class PostBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postInput: "",
      touched: {
        postInput: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate(postInput) {
    const errors = {
      postInput: "",
    };

    if (this.state.touched.postInput) {
      if (postInput.length < 75 || postInput.length < 1) {
        errors.postInput =
          "Your daily prompt post must be at least 75 characters. Add a bit more pizzaz 😉";
      }
    }
    return errors;
  }
  // handleBlur = (field) => () => {
  //   this.setState({
  //     touched: { ...this.state.touched, [field]: true },
  //   });
  // };

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      postInput: { ...prevState.postInput, [name]: value },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      postInput: prevState.postInput,
    }));
  }

  render() {
    return (
      <>
        <Form
          handleInputChange={this.handleInputChange}
          post={this.state.postInput}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default PostBox;
