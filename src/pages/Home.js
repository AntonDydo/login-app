import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

export const Home = () => {
  return (
    <Fragment>
      <SocialIcon network="facebook" />
      <SocialIcon network="github" />
    </Fragment>
  );
};
