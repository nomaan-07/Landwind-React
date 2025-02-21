import SectionCaption from "../../../ui/SectionCaption";
import SectionTitle from "../../../ui/SectionTitle";
import SocialLinks from "./SocialLinks";
import SocialStats from "./SocialStats";

function SocialProof() {
  return (
    <section className="container my-16 gap-16 md:my-20 lg:my-24 lg:flex lg:items-center lg:justify-between lg:gap-24 2xl:gap-40">
      <div className="lg:w-1/2 xl:w-[640px] 2xl:w-1/2">
        <p className="mb-3 text-lg font-medium text-purple-600">
          Trusted Worldwide
        </p>
        <SectionTitle>
          Trusted by over 600 million users and 10,000 teams
        </SectionTitle>

        <SectionCaption className="mt-4 border-b border-b-gray-200 pb-6 font-light">
          Our rigorous security and compliance standards are at the heart of all
          we do. We work tirelessly to protect you and your customers.
        </SectionCaption>

        <SocialLinks />
      </div>

      <SocialStats />
    </section>
  );
}

export default SocialProof;
