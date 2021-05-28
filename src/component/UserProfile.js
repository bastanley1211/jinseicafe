import React from "react";
import { userPhotoFrame } from "./Style";
import { Media, Button } from "reactstrap";

function RenderUser({ user }) {
  if (user) {
    return (
      <>
        <div className="row align-items-end">
          <div className="col-5">
            <img src={user.photo} style={userPhotoFrame} />
          </div>
          <div className="col ml-2 text-center my-auto">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
          </div>
          <div className="row mt-4 mx-auto align-items-center">
            <div className="col-4">
              <h5>Age:</h5>
            </div>
            <div className="col-8">{user.age}</div>
            <div className="col-4">
              <h5>Email:</h5>
            </div>
            <div className="col-8">{user.email}</div>
            <div className="col-4">
              <h5>Password</h5>
            </div>
            <div className="col-8">{user.password}</div>
            <div className="col-4">
              <h5>Post Streak:</h5>
            </div>
            <div className="col-8">{user.postStreak} days</div>
            <div className="col-4">
              <h5>Friends:</h5>
            </div>
            <div className="col-8">{user.friends}</div>
            <Button className="mx-auto mt-2">Update Profile</Button>
          </div>
        </div>
      </>
    );
  }
}

function UserInfo(props) {
  const userProfile = props.user.map((user) => {
    return (
      <Media tag="li" key={user.id}>
        <RenderUser user={user} />
      </Media>
    );
  });
  return <div className="container-fluid p-4 mx-auto">{userProfile}</div>;
}

export default UserInfo;
