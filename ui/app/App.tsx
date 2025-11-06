import { Page, AppHeader } from "@dynatrace/strato-components-preview/layouts";
import React from "react";
import { Route, Routes, Link} from "react-router-dom";
import { Header } from "./components/Header";
import { HostList } from "./pages/HostList";

export const App = () => {
  return (
    <Page>
      <Page.Header>
        <AppHeader>
          <AppHeader.NavItems>
            <AppHeader.AppNavLink as={Link} to="/" />
          </AppHeader.NavItems>
        </AppHeader>
        <Header />
      </Page.Header>
      <Page.Main>
        <Routes>
          <Route path="/" element={<HostList />} />
        </Routes>
      </Page.Main>
    </Page>
  );
};
