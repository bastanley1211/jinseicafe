import React from "react";
import { USER } from "../shared/user";
import { footer } from "./Style";
import { Navbar } from "reactstrap";

function RenderUserData() {
  const userName = USER.map((user) => `${user.firstName} ${user.lastName}`);
  return <>{userName}</>;
}
const userStreak = USER.map((user) => `${user.postStreak}`);

class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid" style={footer}>
        <Navbar>
          <a className="nav-link" href="/profile">
            <i className="fa fa-user-circle fa-lg" />
            <span className="d-none d-md-inline"> {RenderUserData()}</span>
          </a>
          <a className="nav-link m-2 d-none d-md-block" href="/archive">
            <i className="fa fa-pencil fa-lg" />
            <span style={{ textDecoration: "underline" }}>
              {userStreak}
            </span>{" "}
            days
          </a>
          <a className="nav-link ml-auto" href="/settings">
            <i className="fa fa-cog fa-lg" />
          </a>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
