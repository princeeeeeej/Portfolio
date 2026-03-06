"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
  const container = useRef(null);
  const numContainer = useRef(null);
  const mainSection = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const tl = gsap.timeline({ paused: true });

  

  useGSAP(
    () => {
      if (!videoRef.current) return;

      ScrollTrigger.create({
        trigger: videoRef.current,
        start: "top 80%",
        onEnter: () => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        },
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: numContainer.current,
      });

      tl.to(".num1", { y: "-100%", duration: 0.3 })
        .to(".num2", { y: "0%", duration: 0.3 }, "<")
        .to(".num2", { y: "-100%", duration: 0.3 })
        .to(".num3", { y: "0%", duration: 0.3 }, "<")
        .to(".num3", { y: "-100%", duration: 0.3 })
        .to(".num4", { y: "0%", duration: 0.3 }, "<");

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        animation: tl,
      });
    },
    { scope: container },
  );

  const projects = [
    {
      href: "https://board-nine-liard.vercel.app/",
      img: "first.webp",
      video: "board.mp4",
      videoWidth: "w-[70%]",
      subtitle: "Real-Time Collaborative Whiteboard",
      title: "Board",
      year: "2026",
      z: "z-10",
      isFirst: true,
    },
    {
      href: "https://ai-resume-analyzler.vercel.app/",
      img: "second.webp",
      video: "resume.mp4",
      videoWidth: "w-[80%]",
      subtitle: "AI Resume Analyzer",
      title: "Resumind",
      year: "2025",
      z: "z-20",
    },
    {
      href: "https://code-to-image-hx915ccr5-princeeeeeejs-projects.vercel.app/",
      img: "third.webp",
      video: "codeToImage.mp4",
      videoWidth: "w-[80%]",
      subtitle: "Code Snippet Image Generator",
      title: "CodeToImage",
      year: "2026",
      z: "z-30",
    },
    {
      href: "https://github.com/princeeeeeej/AI-JobBoard",
      img: "fourth.webp",
      video: "jobBoard.mp4",
      videoWidth: "w-[80%]",
      subtitle: "Smart Job Discovery Platform",
      title: "ApplyFlow",
      year: "2025",
      z: "z-40",
    },
  ];

  return (
    <div className="bg-[#080807] text-[#D1D1C7] pt-[clamp(1.5rem,_3vw,_2.5rem)] px-[clamp(1.5rem,_3vw,_2.5rem)] pb-[clamp(5rem,_10vw,_10rem)] relative z-2 overflow-x-hidden">
      <div className="flex flex-col overflow-hidden main-section" ref={mainSection}>
        <h1 className="text-[clamp(2.5rem,_7vw_+_0.5rem,_6rem)] font-bold">
          {"SELECTED WORKS/".split(" ").map((word, wi) => (
            <span key={wi} className="inline-block">
              {word.split("").map((char, ci) => (
                <span key={ci} className="char inline-block">
                  {char}
                </span>
              ))}
              {wi === 0 && <span className="inline-block">&nbsp;</span>}
            </span>
          ))}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[clamp(2.5rem,_5vw,_5rem)]">
        <div className="flex sm:justify-end sm:pr-8">
          <h1 className="text-[#7E766C] text-[clamp(0.85rem,_0.8vw_+_0.3rem,_1.1rem)]">
            (PROJECTS)
          </h1>
        </div>
        <div className="w-full sm:w-[61%]">
          <h3 className="text-[clamp(0.9rem,_1.2vw_+_0.3rem,_1.5rem)] text-[#A29E9A] mt-3 sm:mt-0 pl-0 sm:pl-8">
            Thoughtfully crafted digital experiences that blend utility and
            aesthetics into something functional, memorable, and refined.
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[clamp(3rem,_5vw,_5rem)]" ref={container}>
        <div className="h-screen flex items-start pt-10 hidden sm:block" ref={numContainer}>
          <div className="relative h-[clamp(10rem,_14vw,_17rem)] flex text-[clamp(9rem,_13vw,_16rem)] overflow-hidden">
            <span className="leading-none">0</span>
            <div className="relative w-[clamp(7rem,_9vw,_11rem)] h-[clamp(10rem,_13vw,_16rem)]">
              <span className="num1 leading-none absolute top-0 left-0">1</span>
              <span className="num2 leading-none absolute top-0 left-0 translate-y-full">2</span>
              <span className="num3 leading-none absolute top-0 left-0 translate-y-full">3</span>
              <span className="num4 leading-none absolute top-0 left-0 translate-y-full">4</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[clamp(5rem,_10vw,_10rem)]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`sm:ml-[-6rem] relative ${project.z}`}
            >
              <Link href={project.href} className="relative block">
                <img
                  className="h-[clamp(20rem,_35vw_+_5rem,_50rem)] w-full rounded-2xl object-cover"
                  src={project.img}
                  alt="Project Preview"
                />
                <video
                  ref={index === 0 ? videoRef : undefined}
                  preload={index === 0 ? undefined : "auto"}
                  src={project.video}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${project.videoWidth} rounded-xl shadow-xl pointer-events-none object-cover`}
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              </Link>
              <div className="flex justify-between mt-[clamp(0.5rem,_0.8vw,_0.75rem)]">
                <div>
                  <h1 className="text-[clamp(0.85rem,_0.8vw_+_0.3rem,_1.125rem)] text-[#A29E9A]">
                    {project.subtitle}
                  </h1>
                  <h1 className="text-[clamp(1.5rem,_2.5vw_+_0.3rem,_2.25rem)] text-[#D1D1C7] font-bold mt-1">
                    {project.title}
                  </h1>
                </div>
                <div className="flex justify-end items-end sm:items-center pb-1 sm:pb-0 gap-[clamp(0.3rem,_0.5vw,_0.5rem)]">
                  <button className="rounded-full px-[clamp(0.4rem,_0.6vw,_0.5rem)] py-1 border border-[#D1D1C7] text-[clamp(0.6rem,_0.5vw_+_0.2rem,_0.8rem)]">
                    DEVELOPMENT
                  </button>
                  <button className="rounded-full px-[clamp(0.4rem,_0.6vw,_0.5rem)] py-1 text-[#0B0B0A] bg-[#A29E9A] text-[clamp(0.6rem,_0.5vw_+_0.2rem,_0.8rem)]">
                    {project.year}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}