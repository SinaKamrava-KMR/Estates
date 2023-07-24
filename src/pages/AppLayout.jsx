import React from "react";
import { Outlet, useNavigation } from "react-router";
import Loader from "../components/common/Loader";
import Header from "../components/Header/Header";

function AppLayout() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  return (
    <div>
      {loading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
