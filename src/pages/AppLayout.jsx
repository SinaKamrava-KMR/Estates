import React from "react";
import { Outlet, useNavigation } from "react-router";
import Loader from "../components/common/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  return (
    <div>
      {loading && <Loader />}
      <h1>App Layout</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
