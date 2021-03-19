const NavbarItem = (props) => {
  return (
    <a className="navbar-item" href={props.link}>
      {props.name}
    </a>
  );
};
export default NavbarItem;
