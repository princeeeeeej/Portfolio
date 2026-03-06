"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface NavbarProps {
  onServices: () => void;
  onWorks: () => void;
  onAbout: () => void;
  onContact: () => void;
}

export default function Navbar({
  onServices,
  onWorks,
  onAbout,
  onContact,
}: NavbarProps) {
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const navBtns = gsap.utils.toArray<HTMLElement>(".nav-btn");

      navBtns.forEach((btn) => {
        const wrapper = btn.querySelector(".nav-text-wrapper");
        const tl = gsap.timeline({ paused: true });
        tl.to(wrapper, { y: "-100%", duration: 0.4, ease: "power2.out" });

        const play = () => tl.play();
        const reverse = () => tl.reverse();

        btn.addEventListener("mouseenter", play);
        btn.addEventListener("mouseleave", reverse);
      });
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className="relative z-30 mx-4 md:mx-10 mt-6 md:mt-10
                 flex items-start justify-between"
    >
      <h1 className="text-xl xl:text-2xl text-[#6B645C]">
        Web Developer
      </h1>

      <div
        className="flex flex-col items-end md:flex-row md:items-center
                   gap-1 md:gap-4
                   text-sm sm:text-base xl:text-2xl text-[#6B645C]"
      >
        <NavItem label="Services" onClick={onServices} />
        <NavItem label="Works" onClick={onWorks} />
        <NavItem label="About" onClick={onAbout} />
        <NavItem label="Contact" onClick={onContact} />
      </div>
    </nav>
  );
}

function NavItem({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="nav-btn relative cursor-pointer overflow-hidden
                 h-5 sm:h-6 xl:h-8"
    >
      <div className="nav-text-wrapper relative leading-5 sm:leading-6 xl:leading-8">
        <span className="block">{label}</span>
        <span className="absolute top-full left-0">{label}</span>
      </div>
    </div>
  );
}