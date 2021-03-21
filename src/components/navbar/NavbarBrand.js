import logo from "../../images/logo.png";

const NavbarBrand = () => {
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
        data-target="#navbarMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  );
};
export default NavbarBrand;
