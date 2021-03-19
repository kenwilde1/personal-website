import NavbarItem from "./NavbarItem";

const NavbarMenu = () => {
  return (
    <div className="navbar-menu" id="navbarMenu">
      <div className="navbar-start"></div>
      <div className="navbar-end">
        <NavbarItem name="About Me" link="#about-me" />
        <NavbarItem name="Projects" link="/projects" />
        <NavbarItem name="Get in Touch" link="/contact" />
      </div>
    </div>
  );
};
export default NavbarMenu;