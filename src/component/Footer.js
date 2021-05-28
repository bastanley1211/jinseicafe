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
  render(props) {
    return (
      <div className="appFooter container-fluid" style={footer}>
        <Navbar>
          <a className="nav-link" href="/profile">
            <i className="fa fa-user-circle fa-lg" />
            {RenderUserData()}
          </a>
          <span className="m-2">
            <i className="fa fa-pencil fa-lg" />{" "}
            <span style={{ textDecoration: "underline" }}>{userStreak}</span>{" "}
            days
          </span>
          <a className="nav-link mx-auto" href="/settings">
            <i className="fa fa-cog fa-lg" /> Settings
          </a>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
