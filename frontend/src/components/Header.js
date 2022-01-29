import React from "react";
import styled from "styled-components";
import logoDio from "../assets/logo-dio.png";

const Header = () => {
  return (
    <Wrapper>
      <img src={logoDio} alt="logo"></img>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 10%;
  background-color: rgb(21, 21, 21);
  padding: 10px 10px;
`;
