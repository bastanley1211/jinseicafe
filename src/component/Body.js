import React from "react";
import Post from "./Post";
import PostBox from "./PostBox";
import TodaysPost from "./TodaysPost";

class Body extends React.Component {
  render(props) {
    return (
      <div className="mainContent m-4">
        <TodaysPost />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default Body;
