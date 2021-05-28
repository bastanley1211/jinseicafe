import React from "react";

function Post(props) {
  return (
    <div className="container m-3 mx-auto bg-light">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/64/Simple_light_bulb_graphic.png"
        className="img-fluid w-25 d-inline"
      />
      <p className="d-inline">
        <strong>Prompt written here...</strong> "User Response" by User
      </p>
    </div>
  );
}

export default Post;
