import SectionCaption from "../../../ui/SectionCaption";
import SectionTitle from "../../../ui/SectionTitle";
import PricingCards from "./PricingCards";

function Pricing() {
  return (
    <section className="container my-16 md:my-20 lg:my-24">
      <SectionTitle className="text-center">Pay as you grow</SectionTitle>
      <SectionCaption className="mx-auto mt-4 max-w-[768px] text-center">
        Here at flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </SectionCaption>

      <PricingCards />
    </section>
  );
}

export default Pricing;
