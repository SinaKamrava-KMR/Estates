import React from "react";
import { Outlet, useNavigation } from "react-router";
import Loader from "../components/common/Loader";

import { Box, styled } from "@mui/material";
import Header from "../components/Header/Header";

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});
const MainWrapper = styled(Box)({
  flex: 1,
  display: "grid",
  alignContent: "center",
  gridTemplateRows: "1fr",
  gridTemplateColumns: "1fr",

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
