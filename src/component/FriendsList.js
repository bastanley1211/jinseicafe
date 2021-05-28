import { fromPairs } from "lodash";
import React from "react";
import { Media } from "reactstrap";
import { Link } from "react-router-dom";

function RenderFriend({ friend }) {
  if (friend) {
    return (
      <>
        <div className="row mx-auto">
          <Link to="/home" className="d-flex" id="friendListLink">
            <div className="col">
              <img src={friend.friendPhoto} width="50px" />
            </div>
            <div className="col">
              {friend.firstName} {friend.lastName}
            </div>
          </Link>
        </div>
      </>
    );
  }
}

function Friends(props) {
  const friendsList = props.friend.map((friend) => {
    return (
      <Media tag="li" key={friend.id}>
        <RenderFriend friend={friend} />
      </Media>
    );
  });
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-12 text-center mb-3">
          <h1>Jinsei Friends</h1>
        </div>
      </div>
      <Media list className="p-0">
        {friendsList}
      </Media>
    </div>
  );
}

export default Friends;
