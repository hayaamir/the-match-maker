import { Outlet } from "react-router-dom";

import UsersProvider from "../providers/UsersProvider";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <UsersProvider>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </UsersProvider>
  );
}
