import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Layout from "./Layout/Layout";
import FeatureSection from "./FeatureSection/FeatureSection";
import OtherFeature from "./OtherFeature/OtherFeature";
import VideoArea from "./VideoArea/VideoArea";

const LandingPage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <OtherFeature />
      <VideoArea />
    </Layout>
  );
};
export default LandingPage;
