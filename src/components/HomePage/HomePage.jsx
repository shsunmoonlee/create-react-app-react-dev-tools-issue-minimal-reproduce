import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePage = props =>
  <div className={props.className}>
    <h1>HomePage</h1>
  </div>;

HomePage.propTypes = {
  className: PropTypes.string.isRequired
};

const StyledHomePage = styled(HomePage)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default StyledHomePage;
