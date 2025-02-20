import Logo from "../../ui/Logo";
import MenuToggleButton from "./menuToggleButton";
import NavMenu from "./NavMenu";

function MobileNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 h-20 bg-white shadow md:hidden">
      <div className="container flex h-full items-center justify-between">
        <Logo />
        <MenuToggleButton />
        <NavMenu type="mobile" />
      </div>
    </nav>
  );
}

export default MobileNav;
