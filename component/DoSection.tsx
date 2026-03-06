"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function DoSection() {
    const section1 = useRef<HTMLDivElement>(null);
    const section2 = useRef<HTMLDivElement>(null);
    const section3 = useRef<HTMLDivElement>(null);
    const mainSection = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const whatDoRefs = useRef<HTMLDivElement[]>([]);

    // Store ScrollTrigger instances for cleanup
    const triggersRef = useRef<ScrollTrigger[]>([]);

    // Helper to add refs to array
    const addToWhatDoRefs = (el: HTMLDivElement | null) => {
        if (el && !whatDoRefs.current.includes(el)) {
            whatDoRefs.current.push(el);
        }
    };

    useGSAP(() => {
        // Only kill THIS component's ScrollTriggers
        triggersRef.current.forEach(st => st.kill());
        triggersRef.current = [];
        whatDoRefs.current = [];
        
        const mm = gsap.matchMedia();

        // Desktop (640px and above) - ORIGINAL VALUES
        mm.add("(min-width: 640px)", () => {
            const st1 = ScrollTrigger.create({
                trigger: section1.current,
                start: "top 15%",
                end: "bottom+=380",
                pin: true,
                pinSpacing: false,
                scrub: 1,
            });

            const st2 = ScrollTrigger.create({
                trigger: section2.current,
                start: "top 30%",
                end: "bottom-=235",
                pin: true,
                pinSpacing: false,
                scrub: 1,
            });

            const st3 = ScrollTrigger.create({
                trigger: section3.current,
                start: "top 45%",
                end: "bottom-=885",
                pin: true,
                pinSpacing: true,
                scrub: 1,
            });

            triggersRef.current.push(st1, st2, st3);
        });

        // Mobile (below 640px)
        mm.add("(max-width: 639px)", () => {
            const st1 = ScrollTrigger.create({
                trigger: section1.current,
                start: "top 8%",
                endTrigger: section3.current,
                end: "top 24%",
                pin: true,
                pinSpacing: false,
                scrub: 1,
            });

            const st2 = ScrollTrigger.create({
                trigger: section2.current,
                start: "top 16%",
                endTrigger: section3.current,
                end: "top 24%",
                pin: true,
                pinSpacing: false,
                scrub: 1,
            });

            const st3 = ScrollTrigger.create({
                trigger: section3.current,
                start: "top 24%",
                end: "+=1",
                pin: true,
                pinSpacing: true,
                scrub: 1,
            });

            triggersRef.current.push(st1, st2, st3);
        });

        // Animate what-do elements using refs (not global selectors)
        if (whatDoRefs.current.length > 0) {
            const whatDoAnim = gsap.from(whatDoRefs.current, {
                y: 200,
                ease: "power1.out",
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: mainSection.current,
                    start: "top 80%",
                }
            });

            if (whatDoAnim.scrollTrigger) {
                triggersRef.current.push(whatDoAnim.scrollTrigger);
            }
        }

        // Animate heading characters using ref
        if (headingRef.current) {
            const chars = headingRef.current.querySelectorAll(".do-char");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mainSection.current,
                    start: "top 100%",
                }
            });

            tl.from(chars, {
                y: 200,
                ease: "power3.out",
                opacity: 0,
                stagger: 0.03,
            });

            if (tl.scrollTrigger) {
                triggersRef.current.push(tl.scrollTrigger);
            }
        }

        return () => {
            mm.revert();
            triggersRef.current.forEach(st => st.kill());
            triggersRef.current = [];
        };
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-[#080807] text-[#D1D1C7] rounded-t-3xl p-6 sm:p-10 relative z-2 mt-[3rem]">
            <div className="my-8 sm:my-15 overflow-hidden" ref={mainSection}>
                <div ref={addToWhatDoRefs}>
                    <h1 ref={headingRef} className="text-5xl sm:text-9xl tracking-tighter font-bold">
                        {"WHAT I DO /".split("").map((char, i) => (
                            <span key={i} className="do-char inline-block">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex sm:justify-end pr-8 opacity-50 overflow-hidden">
                    <div ref={addToWhatDoRefs} className="mb-3">
                        <h1 className="text-xl sm:text-2xl">(Services)</h1>
                    </div>
                </div>
                <div className="sm:pl-8 w-full sm:w-[75%] overflow-hidden">
                    <div ref={addToWhatDoRefs}>
                        <h3 className="text-[15px] sm:text-2xl text-[#A29E9A]">
                            I specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, I help bring ideas to life whether it&apos;s for a business, a startup, or a product team.
                        </h3>
                    </div>
                </div>
            </div>

            {/* Section 1 - Full-Stack Development */}
            <div className="mt-16 sm:mt-25 stuck-section relative z-10 bg-[#080807]" ref={section1}>
                <div className="bg-[#A29E9A] h-0.5 rounded-full opacity-30" />
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 text-[#D1D1C7]">
                    <div className="flex items-baseline gap-3 sm:block">
                        <div className="text-2xl sm:text-6xl font-bold">(01)</div>
                        <h1 className="text-2xl sm:hidden font-bold tracking-tighter">Full-Stack Development</h1>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="hidden sm:block text-3xl sm:text-6xl font-bold tracking-tighter sm:ml-[-8rem]">
                            Full-Stack Development
                        </h1>
                        <div className="w-full sm:w-[50%] py-6 sm:py-10">
                            <h3 className="text-[#A29E9A] sm:ml-[-6rem] text-[15px] sm:text-[1.3rem]">
                                From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.
                            </h3>
                        </div>
                        <div className="sm:ml-[-6rem] flex gap-4 sm:gap-6 items-center">
                            <div className="text-base sm:text-[1.1rem] text-[#7E766C]">01</div>
                            <div className="text-xl sm:text-3xl font-semibold text-[#BFBFB1]">
                                <h1>React, Node.js, Express.js</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-4 sm:mt-5 rounded-full sm:ml-[-6rem] opacity-30" />
                        <div className="sm:ml-[-6rem] flex gap-4 sm:gap-6 items-center mt-3">
                            <div className="text-base sm:text-[1.1rem] text-[#7E766C]">02</div>
                            <div className="text-xl sm:text-3xl font-semibold text-[#BFBFB1]">
                                <h1>REST APIs, Firebase, Docker</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-4 sm:mt-5 rounded-full sm:ml-[-6rem] opacity-30" />
                        <div className="sm:ml-[-6rem] flex gap-4 sm:gap-6 items-center mt-3">
                            <div className="text-base sm:text-[1.1rem] text-[#7E766C]">03</div>
                            <div className="text-xl sm:text-3xl font-semibold text-[#BFBFB1]">
                                <h1>Git, Github, Postman</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-4 sm:mt-5 rounded-full sm:ml-[-6rem] opacity-30" />
                    </div>
                </div>
            </div>

            {/* Section 2 - UI/UX & Frontend */}
            <div className="mt-16 sm:mt-25 stuck-section relative z-20 bg-[#080807]" ref={section2}>
                <div className="bg-[#A29E9A] h-0.5 rounded-full opacity-30" />
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 text-[#D1D1C7]">
                    <div className="flex items-baseline gap-3 sm:block">
                        <div className="text-2xl sm:text-6xl font-bold">(02)</div>
                        <h1 className="text-2xl sm:hidden font-bold tracking-tighter">UI/UX & Frontend</h1>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="hidden sm:block text-4xl sm:text-6xl font-bold tracking-tighter sm:ml-[-8rem]">
                            UI/UX & Frontend
                        </h1>
                        <div className="w-full sm:w-[50%] py-6 sm:py-10">
                            <h3 className="text-[#A29E9A] sm:ml-[-6rem] text-[15px] sm:text-[1.3rem]">
                                Design is more than looks — it&apos;s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.
                            </h3>
                        </div>
                        <div className="sm:ml-[-6rem] flex gap-4 sm:gap-6 items-center">
                            <div className="text-base sm:text-[1.1rem] text-[#7E766C]">01</div>
                            <div className="text-xl sm:text-3xl font-semibold text-[#BFBFB1]">
                                <h1>NextJs, TailwindCSS, GSAP</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-4 sm:mt-5 rounded-full sm:ml-[-6rem] opacity-30" />
                        <div className="sm:ml-[-6rem] flex gap-4 sm:gap-6 items-center mt-3">
                            <div className="text-base sm:text-[1.1rem] text-[#7E766C]">02</div>
                            <div className="text-xl sm:text-3xl font-semibold text-[#BFBFB1]">
                                <h1>Figma to Code</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-4 sm:mt-5 rounded-full sm:ml-[-6rem] opacity-30" />
                        <div className="sm:ml-[-6rem] flex gap-4 sm:gap-6 items-center mt-3">
                            <div className="text-base sm:text-[1.1rem] text-[#7E766C]">03</div>
                            <div className="text-xl sm:text-3xl font-semibold text-[#BFBFB1]">
                                <h1>HTML, CSS, JavaScript</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-4 sm:mt-5 rounded-full sm:ml-[-6rem] opacity-30" />
                    </div>
                </div>
            </div>

            {/* Section 3 - Optimization */}
            <div className="mt-16 sm:mt-25 stuck-section relative z-30 bg-[#080807] mb-32 sm:mb-50" ref={section3}>
                <div className="bg-[#A29E9A] h-0.5 rounded-full opacity-30" />
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 text-[#D1D1C7]">
                    <div className="flex items-baseline gap-3 sm:block">
                        <div className="text-2xl sm:text-6xl font-bold">(03)</div>
                        <h1 className="text-2xl sm:hidden font-bold tracking-tighter">Optimization</h1>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="hidden sm:block text-4xl sm:text-6xl font-bold tracking-tighter sm:ml-[-8rem]">
                            Optimization
                        </h1>
                        <div className="w-full sm:w-[50%] py-6 sm:py-10">
                            <h3 className="text-[#A29E9A] sm:ml-[-6rem] text-[15px] sm:text-[1.3rem]">
                                Beyond handling data, I&apos;m driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.
                            </h3>
                        </div>
                        <div className="sm:ml-[-6rem] flex gap-4 sm:gap-6 items-center">
                            <div className="text-base sm:text-[1.1rem] text-[#7E766C]">01</div>
                            <div className="text-xl sm:text-3xl font-semibold text-[#BFBFB1]">
                                <h1>Data Structures & Algorithms</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-4 sm:mt-5 rounded-full sm:ml-[-6rem] opacity-30" />
                        <div className="sm:ml-[-6rem] flex gap-4 sm:gap-6 items-center mt-3">
                            <div className="text-base sm:text-[1.1rem] text-[#7E766C]">02</div>
                            <div className="text-xl sm:text-3xl font-semibold text-[#BFBFB1]">
                                <h1>DBMS, OOP, OS Fundamentals</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-4 sm:mt-5 rounded-full sm:ml-[-6rem] opacity-30" />
                        <div className="sm:ml-[-6rem] flex gap-4 sm:gap-6 items-center mt-3">
                            <div className="text-base sm:text-[1.1rem] text-[#7E766C]">03</div>
                            <div className="text-xl sm:text-3xl font-semibold text-[#BFBFB1]">
                                <h1>Data Pipelines, ETL, Scalability</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-4 sm:mt-5 rounded-full sm:ml-[-6rem] opacity-30" />
                    </div>
                </div>
            </div>
        </div>
    );
}