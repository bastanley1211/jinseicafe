import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import UserInfo from "./UserProfile";
import Friends from "./FriendsList";
import Settings from "./Settings";
import { USER } from "../shared/user";
import { PROMPTS } from "../shared/prompts";
import { FRIENDS } from "../shared/friends";
import { POSTS } from "../shared/posts";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: USER,
      prompts: PROMPTS,
      friends: FRIENDS,
      posts: POSTS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <div className="App">
          <Body prompts={this.state.prompts} posts={this.state.posts} />
        </div>
      );
    };
    return (
      <div>
        <Header friends={this.state.friends} />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route
            exact
            path="/profile"
            render={() => <UserInfo user={this.state.user} />}
          />
          <Route
            exact
            path="/friends"
            render={() => <Friends friend={this.state.friends} />}
          />
          <Route path="/settings" component={Settings} />
          <Redirect to="/home" />
        </Switch>
        <Footer user={this.state.user} />
      </div>
    );
  }
}

export default Main;
