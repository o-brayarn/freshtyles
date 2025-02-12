const Navbar = () => {
  return (
    <nav>
      <div className="md:ms-20 ms-10 md:me-20 me-8 py-4 flex justify-between">
        <h1>Freshtyles</h1>
        <ul className="flex justify-around gap-8">
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
