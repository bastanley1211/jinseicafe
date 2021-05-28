import React from "react";
import Post from "./Post";
import PostBox from "./PostBox";
import { PROMPTS } from "../shared/prompts";
import { postBox } from "./Style";
import { FormFeedback, Button } from "reactstrap";

const pickPost = PROMPTS.map((prompt) => `${prompt.promptQ}`);
const todaysPost = pickPost[0];

export default ({ handleInputChange, handleSubmit, postInput }) => {
  return (
    <>
      <div className="container p-4" style={postBox}>
        <div className="row">
          <div className="col-12">
            <h5 className="text-center">{todaysPost}</h5>
          </div>
          <input
            type="textarea"
            id="dailyPost"
            name="dailyPost"
            onChange={handleInputChange}
            value={postInput}
            placeholder="Type your thoughts here..."
            className="w-100 mt-2"
          />
          <Button
            type="submit"
            id="submit"
            name="submit"
            color="dark"
            onClick={handleSubmit}
            className="btn-lg text-center mx-auto d-block mt-3"
          >
            <i className="fa fa-pencil fa-lg" />
          </Button>
        </div>
      </div>
    </>
  );
};
