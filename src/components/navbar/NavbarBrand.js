const NavbarBrand = () => {
  const toggleNavbar = (e) => {
    e.target.classList.toggle("is-active");
    document.querySelector("#navMenu").classList.toggle("is-active");
  };

  return (
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <h1 className="title">
          kenwilde<span className="highlight">.net</span>
        </h1>
      </a>
      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navMenu"
        onClick={toggleNavbar}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  );
};
export default NavbarBrand;
