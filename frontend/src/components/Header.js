import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core/";
import logoDio from "../assets/logo-dio.png";

const Header = () => {
  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        xs={12}
      >
        <img src={logoDio} alt="logo"></img>
      </Grid>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 10%;
  background-color: rgb(21, 21, 21);
  padding: 10px 10px
`;
