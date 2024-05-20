import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ScrollSection from "@/components/ScrollSection";
import WorkingLibraries from "@/components/WorkingLibraries";
import Panels from "@/components/Panel";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Grid from "@/components/Grid";
export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Panels />
      {/* <Skills /> */}
      {/* <ScrollSection /> */}
      <Grid/>
      <Footer />
    </>
  );
}
