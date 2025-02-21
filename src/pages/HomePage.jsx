import FeaturesSections from "../components/home-page/features-section/FeaturesSections";
import Hero from "../components/home-page/hero/Hero";
import Logos from "../components/home-page/logos/Logos";

function HomePage() {
  return (
    <main>
      <Hero />
      <Logos />
      <FeaturesSections />
    </main>
  );
}

export default HomePage;
