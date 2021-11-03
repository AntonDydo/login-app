import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Press } from "./pages/press";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <BrowserRouter>
      <div className="container pt-4">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/Press"} exact component={Press} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;