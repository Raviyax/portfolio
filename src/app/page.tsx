import dynamic from "next/dynamic";
import PageBox from "@/components/core/PageBox";
import Hero from "@/components/home/Hero";
import Qualifications from "@/components/home/Qualifications";
import Technologies from "@/components/home/Technologies";
import Projects from "@/components/home/Projects";
import { projectData } from "@/data/projectData";
import Contact from "@/components/home/ContactUs";
import FloatingNavbar from "@/components/navbar/FloatingNavbar";

const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const Home = () => {
  return (
    <PageBox>
      <FloatingNavbar className="app_nav" />
      <Hero id="home" />
      <Qualifications id="qualifications" />
      <Technologies id="skills" />
      <Projects projects={projectData} />
      <Contact />

      <ScrollToTop />
    </PageBox>
  );
};

export default Home;
