import { POSTS } from "../shared/posts";
import React, { useState } from "react";

function Archive(props) {
  function ArchivedPost() {
    const postPreview = props.posts.map((post) => post.text)[0];

    const renderedPost = props.posts.map((post) => `${postPreview}`)[0];
    return <>{renderedPost}</>;
  }
  const postDate = props.posts.map((post) => post.date)[0];
  const posts = useState(props.posts);
  const archiveFeed = posts.map((post) => (
    <ArchivedPost id={post.id} value={post.value} />
  ));

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-12 text-center mb-3">
          <h1>Post History</h1>
        </div>
        <div className="col-6">
          <h3>Date</h3>
          <p>{postDate}</p>
        </div>
        <div className="col-6">
          <h3>Post Content</h3>
          <p style={{ marginBottom: "60px" }}>{archiveFeed}</p>
        </div>
      </div>
    </div>
  );
}

export default Archive;
