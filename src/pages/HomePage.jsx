import FeaturesSections from "../components/home-page/features-section/FeaturesSections";
import Hero from "../components/home-page/hero/Hero";
import Logos from "../components/home-page/logos/Logos";
import SocialProof from "../components/home-page/social-proof/SocialProof";

function HomePage() {
  return (
    <main>
      <Hero />
      <Logos />
      <FeaturesSections />
      <SocialProof />
    </main>
  );
}

export default HomePage;
