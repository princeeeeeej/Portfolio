"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const langs = ["Java", "SQL", "Python", "Javascript", "Git", "HTML", "CSS"]
    const libs = ["Next.js", "React.js", "Node.js", "Express.js", "GSAP", "Tailwind"]
    const concepts = ["DSA", "DBMS", "OOP", "Operating Systems", "System Design"]

    useGSAP(() => {

        // 🔹 Hero text timeline
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".text1",
                start: "top 70%",
                toggleActions: "play none none none",
            }
        });

        tl1
            .from(".text1", { y: 100, duration: 0.5, ease: "power3.out" })
            .from(".text2", { y: 100, duration: 0.5, ease: "power3.out" }, "-=0.3")
            .from(".text3", { y: 100, duration: 0.5, ease: "power3.out" }, "-=0.3");

        // 🔹 About section timeline
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "top 75%",
                toggleActions: "play none none none",
            }
        });

        tl2
            .from(".about", { opacity: 0, y: 80, duration: 0.5, ease: "power3.out" })
            .from(".about1", { opacity: 0, y: 80, duration: 0.5, ease: "power3.out" }, "-=0.3")
            .from(".about2", { opacity: 0, y: 80, duration: 0.5, ease: "power3.out" }, "-=0.3");

        // 🔹 Skill Items Animation
        const skillItems = document.querySelectorAll(".skill-item");
        skillItems.forEach((item) => {
            const wrapper = item.querySelector(".skill-text-wrapper");
            const tl = gsap.timeline({ paused: true });
            tl.to(wrapper, { y: "-100%", duration: 0.3, ease: "power2.out" });
            item.addEventListener("mouseenter", () => tl.play());
            item.addEventListener("mouseleave", () => tl.reverse());
        });

    });


    return (
        <div className="bg-[#080807] text-[#D1D1C7] p-10 pb-40 rounded-b-3xl relative z-10">
            <div className="grid grid-cols-2">
                <div className="pt-20 relative z-3 space-y-4">
                    <div className="overflow-hidden">
                        <div className="text1 text-8xl font-bold">DEVELOPER</div>
                    </div>

                    <div className="overflow-hidden">
                        <div className="text2 text-8xl font-bold">DESIGNER</div>
                    </div>

                    <div className="overflow-hidden">
                        <div className="text3 text-8xl font-bold">CREATOR</div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-8xl font-bold">Skills</h1>
                    <div className="flex gap-8 mt-10 px-15">
                        <div>
                            <h1 className="font-bold text-[1.3rem] mb-3 ">Languages & Tools</h1>
                            <div className="flex flex-col text-[#95928E] gap-1">
                                {langs.map((lang, index) => (
                                    <div key={index} className="skill-item relative h-[2rem] overflow-hidden cursor-pointer">
                                        <div className="skill-text-wrapper flex flex-col">
                                            <h1 className="text-[1.2rem] mt-1">{lang}</h1>
                                            <h1 className="text-[1.2rem] mt-1 absolute top-full">{lang}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[1.4rem] mb-3">Frameworks & Libraries</h1>
                            <div className="flex flex-col text-[#95928E] gap-1">
                                {libs.map((lib, index) => (
                                    <div key={index} className="skill-item relative h-[2rem] overflow-hidden cursor-pointer">
                                        <div className="skill-text-wrapper flex flex-col">
                                            <h1 className="text-[1.2rem] mt-1">{lib}</h1>
                                            <h1 className="text-[1.2rem] mt-1 absolute top-full">{lib}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[1.4rem] mb-3">Core CS Concepts</h1>
                            <div className="flex flex-col text-[#95928E] gap-1">
                                {concepts.map((con, index) => (
                                    <div key={index} className="skill-item relative h-[2rem] overflow-hidden cursor-pointer">
                                        <div className="skill-text-wrapper flex flex-col">
                                            <h1 className="text-[1.2rem] mt-1">{con}</h1>
                                            <h1 className="text-[1.2rem] mt-1 absolute top-full">{con}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-40">
                <div>
                    <img className="h-[30rem] w-[20rem] rounded-2xl" src="stars.png" alt="Stars" />
                </div>
                <div className="ml-[-6rem]">
                    <div className="pr-15 relative z-3">
                        <div className="overflow-hidden">
                            <h1 className="text-3xl about">I'm a software engineer driven by a passion for turning ideas into clean ,intuitive digital experiences.</h1>
                        </div>
                    </div>
                    <div className="flex gap-20 mt-10">
                        <div className="text-[#95928E] ">
                            <h1>(ABOUT ME)</h1>
                        </div>
                        <div className="w-[50%] relative z-3">
                            <div className="overflow-hidden">
                                <h3 className="text-[#95928E] text-[1.1rem] about1">I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and TailwindCSS.My journey in tech began with a curiosity for solving real-world problems through innovative solutions ,which evolved into a love for crafting user-centric digital experiences.</h3>
                            </div>
                            <div className="overflow-hidden">
                                <h3 className="text-[#95928E] mt-4 text-[1.1rem] about1">Beyondcoding ,I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions.I aim to contribute to impactful projects that make a difference in users' lives.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
