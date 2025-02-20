import Logo from "../../ui/Logo";
import NavMenu from "./NavMenu";
import Button from "../../ui/Button";

function AppNav() {
  return (
    <nav className="container hidden h-20 items-center justify-between font-medium md:flex">
      <div className="flex items-center justify-center gap-8">
        <Logo />
        <NavMenu />
      </div>
      <div className="flex gap-3 lg:gap-4">
        <button className="hidden text-sm font-medium transition-colors delay-75 duration-150 hover:text-purple-600 lg:block">
          Log In
        </button>
        <Button type="small">Get started</Button>
      </div>
    </nav>
  );
}

export default AppNav;
