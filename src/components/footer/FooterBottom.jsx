import Logo from "../../ui/Logo";
import FooterCopyright from "./FooterCopyright";
import FooterSocials from "./FooterSocials";

function FooterBottom() {
  return (
    <div className="mt-12 space-y-4 md:mt-14 md:space-y-5 lg:mt-16">
      <Logo />
      <FooterCopyright />
      <FooterSocials />
    </div>
  );
}

export default FooterBottom;
