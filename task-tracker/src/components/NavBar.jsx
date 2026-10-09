import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <span className="brand">Task Tracker</span>
      <nav>
        <NavLink to="/" end>Tasks</NavLink>
        <NavLink to="/tags">Tags</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}