import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <div className="container">
      <header>
        <nav>
          <NavLink to="/" className={setActive}>
            Крутить!
          </NavLink>
          <NavLink to="/about" className={setActive}>
            О нас
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Тут будет футер</footer>
    </div>
  );
}
