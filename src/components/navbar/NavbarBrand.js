import logo from "../../images/logo.png";

const NavbarBrand = () => {
  return (
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src={logo} alt="logo" id="navbar-logo" height="48" />
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
