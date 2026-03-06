"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const btn = container.current!.querySelector(".contact-btn") as HTMLElement;
      const fill = btn?.querySelector(".btn-fill") as HTMLElement;
      const arrow = btn?.querySelector(".arrow-icon") as HTMLElement;
      const label = btn?.querySelector(".btn-text") as HTMLElement;

      if (btn && fill && arrow && label) {
        gsap.set(fill, { y: "100%" });

        const hover = gsap.timeline({ paused: true });
        hover
          .to(fill, { y: "0%", duration: 0.4, ease: "power4.out" })
          .to(label, { color: "#ffffff", duration: 0.15 }, 0)
          .to(btn, { scale: 1.03, duration: 0.3, ease: "back.out(1.7)" }, 0)
          .to(arrow, { x: 5, y: -5, opacity: 0, duration: 0.2, ease: "power2.in" }, 0)
          .set(arrow, { x: -5, y: 5 }, 0.2)
          .to(arrow, { x: 0, y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, 0.25);

        btn.addEventListener("mouseenter", () => hover.play());
        btn.addEventListener("mouseleave", () => hover.reverse());
      }

      gsap.to(".hero-content", {
        y: 120,
        scale: 0.95,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });

      entrance
        .from(".hero-name span", {
          y: "110%",
          rotateZ: 6,
          duration: 1,
          stagger: 0.025,
          delay: 0.5,
        })
        .from(
          ".upper",
          { y: 50, opacity: 0, duration: 0.9, stagger: 0.12 },
          "-=0.3"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="
        sticky top-[4.5rem] h-dvh name-section
        px-[clamp(1rem,4vw,2.5rem)]
        pt-[clamp(2rem,5vh,5rem)]
        flex flex-col justify-center
        pb-0 md:pb-[clamp(2rem,3vh,3rem)]
      "
    >
      <div className="overflow-hidden hero-content mb-[clamp(3rem,8vh,8rem)]">
        <h1
          className="
            hero-name font-bold tracking-tight text-center
            m-0 p-0 leading-[0.85]
            text-[clamp(3rem,11vw,13rem)]
          "
        >
          {"Prince Jaiswal".split("").map((char, i) => (
            <span key={i} className="inline-block will-change-transform">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

      <div
        className="
          flex flex-col md:flex-row md:items-end md:justify-between
          gap-[clamp(1.5rem,3vw,2.5rem)]
          hero-content
        "
      >
        <div
          className="
            flex flex-col gap-[clamp(0.75rem,1.5vw,1.25rem)]
            md:max-w-[42%]
            upper
          "
        >
          <img
            src="downArrow.png"
            alt=""
            className="
              w-[clamp(1.5rem,2.5vw,2.5rem)] aspect-square
              hidden md:block mb-[clamp(0.5rem,1vw,1rem)]
            "
          />

          <p
            className="
              text-[#393632] leading-[1.55]
              text-[clamp(0.85rem,1.35vw,1.35rem)]
            "
          >
            Open to job opportunities worldwide. Passionate about building
            polished, intuitive, and thoughtful digital experiences that
            leave a mark.
          </p>

          <button
            className="
              contact-btn relative flex items-center w-fit
              rounded-full bg-[#393632] overflow-hidden
              gap-[clamp(0.3rem,0.5vw,0.5rem)]
              py-[clamp(0.5rem,0.9vw,0.9rem)]
              px-[clamp(1rem,1.8vw,1.5rem)]
            "
          >
            <div className="btn-fill absolute inset-0 bg-[#969653]" />
            <div className="relative z-10 flex items-center gap-[clamp(0.3rem,0.5vw,0.5rem)]">
              <span
                className="
                  btn-text text-white font-bold
                  text-[clamp(0.9rem,1.25vw,1.35rem)]
                "
              >
                Contact
              </span>
              <img
                src="arrow.png"
                alt=""
                className="arrow-icon rotate-90 w-[clamp(0.85rem,1.1vw,1.2rem)] aspect-square"
              />
            </div>
          </button>
        </div>

        <div
          className="
            flex items-end justify-between
            gap-[clamp(1rem,2vw,2rem)]
            md:contents
          "
        >
          <div className="shrink-0 overflow-hidden rounded-2xl upper">
            <img
              src="main.jpg"
              alt="Portrait"
              className="
                object-cover rounded-2xl
                w-[clamp(7rem,18vw,16rem)] aspect-[3/4]
              "
            />
          </div>

          <div className="flex flex-col items-end text-right upper">
            <span
              className="
                font-bold text-[#6B645C] tracking-wider uppercase
                text-[clamp(0.55rem,0.85vw,0.95rem)]
              "
            >
              Available for work
            </span>
            <span
              className="
                font-bold text-[#393632] tracking-tight leading-[0.9]
                text-[clamp(1.8rem,5vw,5rem)]
              "
            >
              JAN'25
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}