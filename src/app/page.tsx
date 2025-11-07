"use client";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import SkillsPage from "./skills/page";
import ProjectPage from "./projects/page";
import ContactPage from "./contact/page";
import { Toaster } from "sonner";
import { printConsoleSignature } from "@/Utils/printConsoleSignature";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    printConsoleSignature();
  }, []);
  return (
    <>
      <Toaster position="top-center" richColors theme="dark" />
      <div className="overflow-x-hidden ">
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ProjectPage />
        <ContactPage />
      </div>
    </>
  );
}
