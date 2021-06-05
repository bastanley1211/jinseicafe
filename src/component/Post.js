import React from "react";
import { post } from "./Style";
import { POSTS } from "../shared/posts";
import { USER } from "../shared/user";
import { Media } from "reactstrap";

function RenderPostData(props) {
  const renderedPost = POSTS.map((post) => `${post.text}`)[0];
  return <>{renderedPost}</>;
}

const postTypeHeading = POSTS.map((heading) => `${heading.typeTitle}`)[0];
const userName = USER.map((user) => `${user.firstName} ${user.lastName}`);

function Post(props) {
  return (
    <div className="container m-3 mx-auto p-3 bg-light" style={post}>
      <h3 className="text-center">
        {postTypeHeading} {userName}
      </h3>
      <Media>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/64/Simple_light_bulb_graphic.png"
          className="img-fluid w-25 d-inline"
          alt="lightbulb digitally rendered art clip"
        />
        <p className="d-inline">{RenderPostData()}</p>
      </Media>
      <p className="text-right">
        Created:{" "}
        {
          POSTS.map((post) => {
            return (
              <>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(post.date)))}
              </>
            );
          })[0]
        }
      </p>
    </div>
  );
}

export default Post;
