"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
    const langs = ["Java", "SQL", "Python", "Javascript", "Git", "HTML", "CSS"]
    const libs = ["Next.js", "React.js", "Node.js", "Express.js", "GSAP", "Tailwind"]
    const concepts = ["DSA", "DBMS", "OOP", "Operating", "System Design"]
    const containerRef = useRef(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()

        // ── Hero text animation — all screens ──
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".text1",
                start: "top 70%",
                toggleActions: "play none none none",
            }
        })

        tl1
            .from(".text1", { y: 100, duration: 0.5, ease: "power3.out" })
            .from(".text2", { y: 100, duration: 0.5, ease: "power3.out" }, "-=0.3")
            .from(".text3", { y: 100, duration: 0.5, ease: "power3.out" }, "-=0.3")

        // ── About animation — all screens ──
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "top 75%",
                toggleActions: "play none none none",
            }
        })

        tl2
            .from(".about", { opacity: 0, y: 80, duration: 0.5, ease: "power3.out" })
            .from(".about1", { opacity: 0, y: 80, duration: 0.5, ease: "power3.out" }, "-=0.3")
            .from(".about2", { opacity: 0, y: 80, duration: 0.5, ease: "power3.out" }, "-=0.3")

        // ── Skill hover animation — desktop only (640px+) ──
        mm.add("(min-width: 640px)", () => {
            const skillItems = document.querySelectorAll(".skill-item")
            skillItems.forEach((item) => {
                const wrapper = item.querySelector(".skill-text-wrapper")
                const tl = gsap.timeline({ paused: true })
                tl.to(wrapper, { y: "-100%", duration: 0.3, ease: "power2.out" })

                const play = () => tl.play()
                const reverse = () => tl.reverse()

                item.addEventListener("mouseenter", play)
                item.addEventListener("mouseleave", reverse)

                // Cleanup on media query unmatch
                return () => {
                    item.removeEventListener("mouseenter", play)
                    item.removeEventListener("mouseleave", reverse)
                    tl.kill()
                }
            })
        })

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="bg-[#080807] text-[#D1D1C7] rounded-b-3xl relative z-10
            pt-[clamp(2rem,_4vw,_0rem)]
            px-[clamp(1.25rem,_4vw,_2.5rem)]
            pb-[clamp(3rem,_8vw,_10rem)]">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(2rem,_4vw,_0rem)]">
   
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-[clamp(2.75rem,_6vw_+_1rem,_8rem)]">
                        Skills
                    </h1>

                    <div className="flex flex-wrap sm:flex-nowrap
                        gap-[clamp(1.25rem,_2.5vw,_2rem)]
                        mt-[clamp(1.25rem,_2.5vw,_2.5rem)]
                        px-[clamp(0.5rem,_3vw,_4rem)]">

                        <div>
                            <h1 className="font-bold mb-[clamp(0.4rem,_0.8vw,_0.75rem)] hidden sm:block
                                text-[clamp(0.95rem,_1vw_+_0.2rem,_1.3rem)]">
                                Languages & Tools
                            </h1>
                            <div className="flex flex-col text-[#95928E] gap-[clamp(0.1rem,_0.3vw,_0.25rem)]">
                                {langs.map((lang, index) => (
                                    <div key={index} className="skill-item relative overflow-hidden cursor-pointer
                                        h-[clamp(1.6rem,_1.8vw_+_0.5rem,_2rem)]">
                                        <div className="skill-text-wrapper flex flex-col">
                                            <h1 className="text-[clamp(0.8rem,_0.7vw_+_0.35rem,_1.2rem)] mt-[0.15rem]">
                                                {lang}
                                            </h1>
                                            <h1 className="text-[clamp(0.8rem,_0.7vw_+_0.35rem,_1.2rem)] mt-[0.15rem] absolute top-full hidden sm:block">
                                                {lang}
                                            </h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h1 className="font-bold mb-[clamp(0.4rem,_0.8vw,_0.75rem)] hidden sm:block
                                text-[clamp(0.95rem,_1vw_+_0.2rem,_1.4rem)]">
                                Frameworks & Libraries
                            </h1>
                            <div className="flex flex-col text-[#95928E] gap-[clamp(0.1rem,_0.3vw,_0.25rem)]">
                                {libs.map((lib, index) => (
                                    <div key={index} className="skill-item relative overflow-hidden cursor-pointer
                                        h-[clamp(1.6rem,_1.8vw_+_0.5rem,_2rem)]">
                                        <div className="skill-text-wrapper flex flex-col">
                                            <h1 className="text-[clamp(0.8rem,_0.7vw_+_0.35rem,_1.2rem)] mt-[0.15rem]">
                                                {lib}
                                            </h1>
                                            <h1 className="text-[clamp(0.8rem,_0.7vw_+_0.35rem,_1.2rem)] mt-[0.15rem] absolute top-full hidden sm:block">
                                                {lib}
                                            </h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h1 className="font-bold mb-[clamp(0.4rem,_0.8vw,_0.75rem)] hidden sm:block
                                text-[clamp(0.95rem,_1vw_+_0.2rem,_1.4rem)]">
                                Core CS Concepts
                            </h1>
                            <div className="flex flex-col text-[#95928E] gap-[clamp(0.1rem,_0.3vw,_0.25rem)]">
                                {concepts.map((con, index) => (
                                    <div key={index} className="skill-item relative overflow-hidden cursor-pointer
                                        h-[clamp(1.6rem,_1.8vw_+_0.5rem,_2rem)]">
                                        <div className="skill-text-wrapper flex flex-col">
                                            <h1 className="text-[clamp(0.8rem,_0.7vw_+_0.35rem,_1.2rem)] mt-[0.15rem]">
                                                {con}
                                            </h1>
                                            <h1 className="text-[clamp(0.8rem,_0.7vw_+_0.35rem,_1.2rem)] mt-[0.15rem] absolute top-full hidden sm:block">
                                                {con}
                                            </h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex-col z-3
                    pt-[clamp(2rem,_4vw,_5rem)]
                    space-y-[clamp(0rem,_0.3vw,_0.5rem)]">
                    <div className="overflow-hidden">
                        <div className="text1 font-bold text-[clamp(2.5rem,_5.5vw_+_0.5rem,_6rem)]">DEVELOPER</div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="text2 font-bold text-[clamp(2.5rem,_5.5vw_+_0.5rem,_6rem)]">DESIGNER</div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="text3 font-bold text-[clamp(2.5rem,_5.5vw_+_0.5rem,_6rem)]">CREATOR</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 sm:mb-0
                mt-[clamp(3.5rem,_7vw,_7.5rem)]">
                <div>
                    <img
                        className="rounded-2xl object-cover w-full
                            sm:h-[clamp(22rem,_28vw,_30rem)]
                            sm:w-[clamp(14rem,_20vw,_20rem)]"
                        src="third.webp"
                        alt="Stars"
                    />
                </div>
                <div className="sm:ml-[clamp(-8rem,_-5vw,_-4rem)]">
                    <div className="relative z-3
                        pt-[clamp(1.5rem,_3vw,_0rem)]
                        pr-[clamp(0rem,_3vw,_3.75rem)]">
                        <div className="overflow-hidden w-[85%] sm:w-full">
                            <h1 className="about text-[clamp(1.15rem,_1.6vw_+_0.4rem,_1.875rem)]">
                                I&apos;m a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences.
                            </h1>
                        </div>
                    </div>
                    <div className="sm:flex
                        gap-[clamp(1.25rem,_3.5vw,_5rem)]
                        mt-[clamp(1.25rem,_2.5vw,_2.5rem)]">
                        <div className="shrink-0 text-[#95928E]
                            text-[clamp(0.85rem,_0.7vw_+_0.3rem,_1.1rem)]">
                            <h1>(ABOUT ME)</h1>
                        </div>
                        <div className="relative z-3 mt-5 sm:mt-0
                            w-[85%] sm:w-[50%]">
                            <div className="overflow-hidden">
                                <h3 className="text-[#95928E] about1
                                    text-[clamp(0.85rem,_0.7vw_+_0.3rem,_1.1rem)]">
                                    I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and TailwindCSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.
                                </h3>
                            </div>
                            <div className="overflow-hidden">
                                <h3 className="text-[#95928E] about1
                                    text-[clamp(0.85rem,_0.7vw_+_0.3rem,_1.1rem)]
                                    mt-[clamp(0.5rem,_0.8vw,_1rem)]">
                                    Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users&apos; lives.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}