const Nav = () => {
  return (
    <nav className="bg-green-500 text-white py-3">
      <ul className="flex justify-center gap-2">
        <li className="border-r-2 pr-2">
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Favoritos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
