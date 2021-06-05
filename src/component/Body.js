import React, { useState } from "react";
import Post from "./Post";
import PostBox from "./PostBox";
import { nanoid } from "nanoid";
import { POSTS } from "../shared/posts";

function Body(props) {
  const [posts, setPosts] = useState(props.posts);
  function addPost(value) {
    const newPost = { id: "post-" + nanoid(), value: value };
    setPosts([...posts, newPost]);
  }
  function deletePost(id) {
    const remainingPosts = posts.filter((post) => id !== post.id);
    setPosts(remainingPosts);
  }

  const postFeed = posts.map((post) => (
    <Post
      id={post.id}
      value={post.value}
      key={post.id}
      deletePost={deletePost}
    />
  ));

  return (
    <div className="mainContent">
      <PostBox />
      <div style={{ marginBottom: "60px" }}>{postFeed}</div>
    </div>
  );
}

export default Body;
