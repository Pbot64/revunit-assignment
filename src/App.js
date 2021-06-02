import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Local Components
import { Post } from "./screens/Post";
import { PostList } from "./screens/PostList";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/:id">
            <Post />
          </Route>
          <Route path="/">
            <PostList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
