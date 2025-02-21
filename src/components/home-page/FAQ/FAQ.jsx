import SectionTitle from "../../../ui/SectionTitle";
import Accordion from "./Accordion";

function FAQ() {
  return (
    <section className="container pb-16 md:pb-20 lg:pb-24">
      <SectionTitle className="text-center">
        Frequently asked questions
      </SectionTitle>

      <Accordion />
    </section>
  );
}

export default FAQ;
