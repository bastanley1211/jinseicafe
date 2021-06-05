import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import UserInfo from "./UserProfile";
import Archive from "./PostArchive";
import Settings from "./Settings";
import { USER } from "../shared/user";
import { PROMPTS } from "../shared/prompts";
import { POSTS } from "../shared/posts";
import { Switch, Route, Redirect } from "react-router-dom";
import PostBox from "./PostBox";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: USER,
      prompts: PROMPTS,
      posts: POSTS,
      theme: "light",
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
        <TransitionGroup>
          <CSSTransition key={this.state} classNames="page" timeout={300}>
            <Switch>
              <Route exact path="/home" component={HomePage} />
              <Route path="/create" component={PostBox} />
              <Route
                exact
                path="/profile"
                render={() => <UserInfo user={this.state.user} />}
              />
              <Route
                exact
                path="/archive"
                render={() => <Archive posts={this.state.posts} />}
              />
              <Route path="/settings" component={Settings} />
              <Route
                exact
                path="/settings"
                render={() => <Settings theme={this.state.theme} />}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer user={this.state.user} />
      </div>
    );
  }
}

export default Main;
