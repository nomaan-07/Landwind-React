import SectionCaption from "../../../ui/SectionCaption";
import SectionTitle from "../../../ui/SectionTitle";
import FeatureImage from "./FeatureImage";
import FeatureList from "./FeatureList";

const firstOptions = [
  { id: 1, option: "Continuous integration and deployment" },
  { id: 2, option: "Development workflow" },
  { id: 3, option: "Knowledge management" },
];

const secondOptions = [
  { id: 1, option: "Dynamic reports and dashboards" },
  { id: 2, option: "Templates for everyone" },
  { id: 3, option: "Development workflow" },
  { id: 4, option: "Limitless business automation" },
  { id: 5, option: "Knowledge management" },
];

function FeaturesSections() {
  return (
    <section className="mt-16 bg-gray-50 py-16 md:mt-20 md:py-20 lg:mt-24 lg:py-24">
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:items-center lg:justify-between xl:gap-16">
          <div className="lg:w-1/2">
            <SectionTitle>Work with tools you already use</SectionTitle>
            <SectionCaption className="mt-4 border-b border-b-gray-200 pb-6 xl:pb-8">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </SectionCaption>
            <FeatureList options={firstOptions} />
            <SectionCaption className="mt-6">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </SectionCaption>
          </div>
          <FeatureImage className="xl:pl-2.5" src="features-1.png" />
        </div>
        <div className="mt-20 flex flex-col-reverse gap-10 md:gap-12 lg:flex-row lg:items-center lg:justify-between xl:gap-16">
          <FeatureImage className="xl:pr-2.5" src="features-2.png" />
          <div className="lg:w-1/2">
            <SectionTitle>We invest in the world&apos;s potential</SectionTitle>
            <SectionCaption className="mt-4 border-b border-b-gray-200 pb-6 xl:pb-8">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </SectionCaption>
            <FeatureList options={secondOptions} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSections;
