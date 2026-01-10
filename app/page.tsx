"use client";

import { useRef } from "react";
import Navbar from "@/component/Navbar";
import HeroSection from "@/component/HeroSection";
import DoSection from "@/component/DoSection";
import SelectedWork from "@/component/SelectedWork";
import Skills from "@/component/Skills";
import Hello from "@/component/Hello";
import Footer from "@/component/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useGSAP(() => {
    if (!mainRef.current) return;

    gsap.set(mainRef.current, {
      clipPath: "ellipse(150% 120% at 50% 130%)",
    });

    gsap.to(mainRef.current, {
      clipPath: "ellipse(0% 0% at 50% 130%)",
      duration: 1.4,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(mainRef.current, { display: "none" });
      },
    });
  });


  return (
    <div className="relative">
      <div className="fixed inset-[-200px] z-[100] bg-black" ref={mainRef} />
      <div className="">
        <Navbar
          onServices={() => scrollTo(servicesRef)}
          onWorks={() => scrollTo(worksRef)}
          onAbout={() => scrollTo(aboutRef)}
          onContact={() => scrollTo(contactRef)}
        />

        <HeroSection />

        <div ref={servicesRef}>
          <DoSection />
        </div>

        <div ref={worksRef}>
          <SelectedWork />
        </div>

        <div ref={aboutRef}>
          <Skills />
        </div>

        <div ref={contactRef}>
          <Hello />
          <Footer />
        </div>
      </div>
    </div>
  );
}
