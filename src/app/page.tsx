import HomePage from "./home/page";
import AboutPage from "./about/page";
import SkillsPage from "./skills/page";
import ProjectPage from "./projects/page";
import ContactPage from "./contact/page";
import { Toaster } from "sonner";
import ReactLenis from "lenis/react";
export default function Home() {
  return (
    <>
      <Toaster position="top-center" richColors theme="dark" />
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.4,
          orientation: "vertical",
        }}
      >
        <div className="overflow-x-hidden ">
          <HomePage />
          <AboutPage />
          <SkillsPage />
          <ProjectPage />
          <ContactPage />
        </div>
      </ReactLenis>
    </>
  );
}
