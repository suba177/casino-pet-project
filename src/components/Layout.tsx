import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Тут будет футер</footer>
    </div>
  );
}
