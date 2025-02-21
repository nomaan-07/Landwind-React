import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="container py-12 md:py-14 lg:py-16">
      <FooterNav />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
