import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { injectGlobal } from "styled-components";
// import "bulma/css/bulma.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import PageLayoutRoute from "components/controls/PageLayoutRoute";
import { SocialIntegrator } from "components/Social";
// import { createStore } from "store";

import routes from "components/routes";
import HomePage from "components/HomePage";
// import StudioPage from "components/StudioPage";
// import FramingPage from "components/FramingPage";
// import OrderReviewPage from "components/OrderReviewPage";
// import OrderConfirmationPage from "components/OrderConfirmationPage";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    overflow-y: auto;
  }
`;

// const store = createStore();

const App = () =>
  <SocialIntegrator>
      <Router>
        <Switch>
          <PageLayoutRoute exact path={routes.home} component={HomePage} />
          {/*
          <PageLayoutRoute path="/review" component={OrderReviewPage} />
          <PageLayoutRoute path="/confirmed" component={OrderConfirmationPage} />*/}
        </Switch>
      </Router>
  </SocialIntegrator>;

export default App;
