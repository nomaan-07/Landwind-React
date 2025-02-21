import Button from "../../../ui/Button";
import SectionCaption from "../../../ui/SectionCaption";
import SectionTitle from "../../../ui/SectionTitle";

function CTA() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="container space-y-6">
        <SectionTitle className="text-center">
          Start your free trial today
        </SectionTitle>
        <SectionCaption className="text-center">
          Try Flowbite Platform for 30 days. No credit card required.
        </SectionCaption>
        <Button type="primary" className="mx-auto block w-full xs:w-auto">
          Free trial for 30 days
        </Button>
      </div>
    </section>
  );
}

export default CTA;
