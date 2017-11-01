import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";


class PageLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render = () => {

    return (
      <div>
        {this.props.children}
        <h2>PageLayoutRoute</h2>
      </div>
    );
  };
}

const PageLayoutRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    // eslint-disable-next-line react/jsx-no-bind
    render={props =>
      <PageLayout {...props}>
        <Component />
      </PageLayout>}
  />;

PageLayoutRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PageLayoutRoute;
