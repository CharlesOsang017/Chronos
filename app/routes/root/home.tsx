import HomeHeader from "@/components/layout/HomeHeader";
import type { Route } from "../../+types/root";
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import HowItWorks from "@/components/layout/HowItWorks";
import Footer from "@/components/layout/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "taskHub" },
    { name: "description", content: "Welcome to Chronos" },
  ];
}
const home = () => {
  return (
    <>
      <div className='max-w-4xl mx-auto mt-2'>
        <HomeHeader />
        <Hero />
        <Features />
        <HowItWorks />
      </div>
      <Footer />
    </>
  );
};

export default home;
