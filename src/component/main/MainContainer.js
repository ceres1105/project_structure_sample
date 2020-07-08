import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Login from "../../screen/Login";

const MainContainer = () => {
  return (
    <div>
      <Wrapper>
        Main Container
        <Link to="/login"> Login </Link>
      </Wrapper>
    </div>
  );
};

export default MainContainer;

const Wrapper = styled.div`
  height: 500px;
  width: 100%;
  background-color: lightblue;
`;
