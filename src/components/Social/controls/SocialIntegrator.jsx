import React from "react";
import PropTypes from "prop-types";

// import { facebookConfig } from "../settings";

let initialized = false;

// const installFacebookSdk = () => {
//   /* eslint-disable no-undef */
//   window.fbAsyncInit = () => {
//     FB.init(facebookConfig);
//     FB.AppEvents.logPageView();
//   };
//
//   const elem = document.createElement("script");
//   elem.src = "https://connect.facebook.net/en_US/sdk.js";
//   document.body.insertBefore(elem, document.body.firstChild);
//   /* eslint-enable no-undef */
// };

const installPinterest = () => {
  const elem = document.createElement("script");
  elem.src = "https://assets.pinterest.com/js/pinit.js";
  elem.async = true;
  elem.defer = true;
  document.body.insertBefore(elem, document.body.firstChild);
};

const installTwitter = () => {
  // Reference: https://dev.twitter.com/web/javascript/loading
  /* eslint-disable no-underscore-dangle */
  const elem = document.createElement("script");
  elem.src = "https://platform.twitter.com/widgets.js";
  document.body.insertBefore(elem, document.body.firstChild);
  const t = {};
  t._e = [];
  t.ready = f => {
    t._e.push(f);
  };
  window.twttr = t;
  /* eslint-enable no-underscore-dangle */
};

class SocialIntegrator extends React.Component {
  static propTypes = { children: PropTypes.node.isRequired };

  componentDidMount = () => {
    if (!initialized) {
      initialized = true;

      // installFacebookSdk();
      installPinterest();
      installTwitter();
    }
  };

  render = () => React.Children.only(this.props.children);
}

export default SocialIntegrator;
