import { HiOutlineShoppingBag } from "react-icons/hi";

const NavLinks = () => {
  return (
    <ul className="flex justify-around items-center gap-8">
      <li>Home</li>
      <li>Shop</li>
      <li>Blog</li>
      <li>About</li>
      <li>Contact</li>
      <li>
        <button className="cursor-pointer">
          <HiOutlineShoppingBag size={20} />
        </button>
      </li>
    </ul>
  );
};
const Navbar = () => {
  return (
    <nav>
      <div className="md:ms-20 ms-10 md:me-24 me-8 py-4 flex justify-between">
        <h1 className="font-semibold text-2xl">Freshtyles</h1>

        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
