import { AppShell } from "@mantine/core";
import HeaderFilms from "./components/header/Header";
import { FilmsProvider } from "./redux/provider/FilmsProvider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <FilmsProvider>
      <AppShell navbarOffsetBreakpoint="sm">
        <HeaderFilms />
        <Outlet />
      </AppShell>
    </FilmsProvider>
  );
}

export default App;
