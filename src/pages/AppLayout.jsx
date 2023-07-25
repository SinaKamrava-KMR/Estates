import React from "react";
import { Outlet, useNavigation } from "react-router";
import Loader from "../components/common/Loader";
import Header from "../components/header/Header";
import { Box, styled } from "@mui/material";

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});
const MainWrapper = styled(Box)({
  flex: 1,
  display: "grid",
  alignContent: "center"
});

function AppLayout() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  return (
    <Wrapper>
      {loading && <Loader />}
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </Wrapper>
  );
}

export default AppLayout;
