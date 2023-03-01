import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-green-500 text-white py-3">
      <ul className="flex justify-center gap-2">
        <li className="border-r-2 pr-2">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favoritos" className="hover:underline">
            Favoritos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
