import SectionCaption from "../../../ui/SectionCaption";
import HeroButtons from "./HeroButtons";
import HeroTitle from "./HeroTitle";

function Hero() {
  return (
    <section className="container mt-20 flex flex-col-reverse gap-8 md:mt-8 md:items-center lg:mt-12 lg:flex-row lg:justify-between xl:mt-16">
      <div className="lg:w-[530px] xl:w-[736px] 2xl:w-[900px]">
        <HeroTitle>Building digital products & brands.</HeroTitle>

        <SectionCaption className="mt-6">
          Here at flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </SectionCaption>

        <HeroButtons />
      </div>

      <img src="./images/hero-section.png" alt="digital products" />
    </section>
  );
}

export default Hero;
