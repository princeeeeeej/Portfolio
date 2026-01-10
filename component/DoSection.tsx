"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function DoSection() {
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const mainSection = useRef(null);

    useGSAP(() => {
        // Section 1 Pin
        ScrollTrigger.create({
            trigger: section1.current,
            start: "top 15%", // Starts pinning at 15% viewport height
            end: "bottom+=380", // Keeps it pinned for a while
            pin: true,
            pinSpacing: false, // Allows subsequent sections to scroll over it
            scrub: 1,
        });

        // Section 2 Pin (Stacking below S1 title)
        ScrollTrigger.create({
            trigger: section2.current,
            start: "top 30%", // Starts pinning lower to reveal S1 title (approx offset)
            end: "bottom-=235",
            pin: true,
            pinSpacing: false,
            scrub: 1,
        });

        // Section 3 Pin (Stacking below S2 title)
        ScrollTrigger.create({
            trigger: section3.current,
            start: "top 45%", // Starts pinning even lower
            end: "bottom-=885",
            pin: true,
            pinSpacing: true, // Last one can have spacing or normal flow
            scrub: 1,
        });

        gsap.from(".what-do", {
            y: 200,
            ease: "power1.out",
            opacity: 0,
            duration: 0.8,
            scrollTrigger:{
                trigger:mainSection.current,
                start:"top 80%",
            }
        });

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:mainSection.current,
                start:"top 100%",
            }
        });

        tl.from(".char", {
            y:200,
            ease: "power3.out",
            opacity: 0,
            stagger:0.03,
        })


    }, {});

    return (
        <div className="bg-[#080807] text-[#D1D1C7] rounded-t-3xl p-10 relative z-2 mt-[3rem] ">
            <div className=" my-15 overflow-hidden " ref={mainSection}>
                <div className="what-do">
                    <h1 className=" text-9xl tracking-tighter font-bold">
                        {"WHAT I DO /".split("").map((char, i) => (
                            <span key={i} className="char inline-block">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex justify-end pr-8 opacity-50 overflow-hidden">
                    <div className="what-do">
                        <h1 className="text-2xl">(Services)</h1>
                    </div>
                </div>
                <div className="pl-8 w-[75%] overflow-hidden">
                    <div  className="what-do">
                        <h3 className="text-2xl text-[#A29E9A]">I specialize in building full-stack web applications that are fast ,reliable ,anduser-friendly. With a solid foundation in both frontend and backend technologies ,I help bring ideas to life whether it's for a business ,a startup, or a product team.</h3>
                    </div>
                </div>
            </div>

            <div className="mt-25 stuck-section relative z-10 bg-[#080807]" ref={section1}>
                <div className="bg-[#A29E9A] h-0.5 rounded-full opacity-30" />
                <div className="mt-5 grid grid-cols-2 text-[#D1D1C7] " >
                    <div className="text-6xl font-bold">(01)</div>
                    <div className="flex flex-col ">
                        <h1 className="text-6xl font-bold tracking-tighter ml-[-8rem]">Full-Stack Development</h1>
                        <div className="w-[50%] py-10">
                            <h3 className="text-[#A29E9A] ml-[-6rem] text-[1.3rem]">From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.</h3>
                        </div>
                        <div className="ml-[-6rem] flex gap-6 items-center">
                            <div className="text-[1.1rem] text-[#7E766C]">01</div>
                            <div className="text-3xl font-semibold text-[#BFBFB1]">
                                <h1>React,Node.js,Express.js</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-5 rounded-full ml-[-6rem] opacity-30" />
                        <div className="ml-[-6rem] flex gap-6 items-center mt-3">
                            <div className="text-[1.1rem] text-[#7E766C]">02</div>
                            <div className="text-3xl font-semibold text-[#BFBFB1]">
                                <h1>Rest APIs,Firebase,Docker</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-5 rounded-full ml-[-6rem] opacity-30" />
                        <div className="ml-[-6rem] flex gap-6 items-center mt-3">
                            <div className="text-[1.1rem] text-[#7E766C]">03</div>
                            <div className="text-3xl font-semibold text-[#BFBFB1]">
                                <h1>Git,Github,Postman</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-5 rounded-full ml-[-6rem] opacity-30" />
                    </div>
                </div>
            </div>
            <div className="mt-25 stuck-section relative z-20 bg-[#080807]" ref={section2} >
                <div className="bg-[#A29E9A] h-0.5 rounded-full opacity-30" />
                <div className="mt-5 grid grid-cols-2 text-[#D1D1C7] " >
                    <div className="text-6xl font-bold">(02)</div>
                    <div className="flex flex-col ">
                        <h1 className="text-6xl font-bold tracking-tighter ml-[-8rem]">UI/UX & Frontend</h1>
                        <div className="w-[50%] py-10">
                            <h3 className="text-[#A29E9A] ml-[-6rem] text-[1.3rem]">Design is more than looks — it’s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences</h3>
                        </div>
                        <div className="ml-[-6rem] flex gap-6 items-center">
                            <div className="text-[1.1rem] text-[#7E766C]">01</div>
                            <div className="text-3xl font-semibold text-[#BFBFB1]">
                                <h1>NextJs, TailwindCSS, GSAP</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-5 rounded-full ml-[-6rem] opacity-30" />
                        <div className="ml-[-6rem] flex gap-6 items-center mt-3">
                            <div className="text-[1.1rem] text-[#7E766C]">02</div>
                            <div className="text-3xl font-semibold text-[#BFBFB1]">
                                <h1>Figma to Code</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-5 rounded-full ml-[-6rem] opacity-30" />
                        <div className="ml-[-6rem] flex gap-6 items-center mt-3">
                            <div className="text-[1.1rem] text-[#7E766C]">03</div>
                            <div className="text-3xl font-semibold text-[#BFBFB1]">
                                <h1>HTML, CSS, JavaScript</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-5 rounded-full ml-[-6rem] opacity-30" />
                    </div>
                </div>
            </div>
            <div className="mt-25 stuck-section relative z-30 bg-[#080807] mb-50" ref={section3}>
                <div className="bg-[#A29E9A] h-0.5 rounded-full opacity-30" />
                <div className="mt-5 grid grid-cols-2 text-[#D1D1C7] " >
                    <div className="text-6xl font-bold">(03)</div>
                    <div className="flex flex-col ">
                        <h1 className="text-6xl font-bold tracking-tighter ml-[-8rem]">Optimization</h1>
                        <div className="w-[50%] py-10">
                            <h3 className="text-[#A29E9A] ml-[-6rem] text-[1.3rem]">Beyond handling data, I’m driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.</h3>
                        </div>
                        <div className="ml-[-6rem] flex gap-6 items-center">
                            <div className="text-[1.1rem] text-[#7E766C]">01</div>
                            <div className="text-3xl font-semibold text-[#BFBFB1]">
                                <h1>Data Structures & Algorithms</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-5 rounded-full ml-[-6rem] opacity-30" />
                        <div className="ml-[-6rem] flex gap-6 items-center mt-3">
                            <div className="text-[1.1rem] text-[#7E766C]">02</div>
                            <div className="text-3xl font-semibold text-[#BFBFB1]">
                                <h1>DBMS, OOP, OS Fundamentals</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-5 rounded-full ml-[-6rem] opacity-30" />
                        <div className="ml-[-6rem] flex gap-6 items-center mt-3">
                            <div className="text-[1.1rem] text-[#7E766C]">03</div>
                            <div className="text-3xl font-semibold text-[#BFBFB1]">
                                <h1>Data Pipelines, ETL, and Scalability</h1>
                            </div>
                        </div>
                        <div className="bg-[#A29E9A] h-0.5 mt-5 rounded-full ml-[-6rem] opacity-30" />
                    </div>
                </div>
            </div>
        </div>
    )
}