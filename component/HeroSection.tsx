"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const container = useRef(null);
    const nameRef = useRef(null);
    useGSAP(() => {
        const button = document.querySelector(".contact-btn") as HTMLElement;
        const fill = document.querySelector(".btn-fill") as HTMLElement;
        const arrow = document.querySelector(".arrow-icon") as HTMLElement;
        const text = document.querySelector(".btn-text") as HTMLElement;

        if (button && fill && arrow && text) {
            gsap.set(fill, { y: "100%" });

            const tl = gsap.timeline({ paused: true });

            tl.to(fill, { y: "0%", duration: 0.5, ease: "power4.out" })
                .to(text, { color: "white", duration: 0.1 }, 0)
                .to(button, { scale: 1.02, duration: 0.3, ease: "back.out(1.7)" }, 0)
                .to(arrow, { x: 5, y: -5, opacity: 0, duration: 0.2, ease: "power2.in" }, 0)
                .set(arrow, { x: -5, y: 5 }, 0.2)
                .to(arrow, { x: 0, y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, 0.2);

            button.addEventListener("mouseenter", () => tl.play());
            button.addEventListener("mouseleave", () => tl.reverse());
        }

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "-=10%",
                end: "+=100%",
                scrub: 1,
            }
        });

        tl1.to(".hero-content", {
            y: 150,
            scale: 0.9,
            ease: "power1.in",
            opacity: 0,
            duration: 0.8,

        });

        gsap.from(".upper", {
            y: 200,
            ease: "power1.out",
            opacity: 0,
            duration: 0.8,
            delay:0.5,
        })

        // gsap.from(".down-image", {
        //     y: -200,
        //     ease: "power1.out",
        //     opacity: 0,
        //     duration: 0.8,
        // })

        gsap.from(nameRef.current, {
            y: 200,
            ease: "power1.out",
            opacity: 0,
            duration: 0.8,
            stagger:0.05,
            delay:0.5,
        })

    }, { scope: container });

    return (
        <div className="mx-10 sticky top-18 h-[100vh] name-section" ref={container}>
            <div className=" relative inline-block overflow-hidden hero-content" >
                <div className="flex" ref={nameRef} >
                    <h1 className="text-[12.6rem] font-bold leading-none mt-10 mb-5 ">
                        {"Prince Jaiswal".split("").map((char, i) => (
                            <span key={i} className="inline-block" >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-3 hero-content">
                <div className="flex-col ">
                    <div className="mb-10">
                        <img className="h-10 w-10" src="downArrow.png" alt="Down Arrow" />
                    </div>
                    <div className="mb-10 upper">
                        <h3 className="text-[#393632] text-2xl">Open to job opportunities worldwide.Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.</h3>
                    </div>
                    <div className="mb-10 upper">
                        <button className="contact-btn relative flex items-center gap-1 rounded-full bg-[#393632] py-4 px-6 border border-transparent overflow-hidden">
                            <div className="btn-fill absolute inset-0 bg-[#969653ff]"></div>
                            <div className="relative z-10 flex items-center gap-1">
                                <h1 className="btn-text text-white text-2xl font-bold">Contact</h1>
                                <img className="arrow-icon w-5 h-5 rotate-90" src="arrow.png" alt="Arrow" />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center relative overflow-hidden">
                    <div className=" down-image">
                        <img className="h-[25rem] w-[18rem] rounded-2xl" src="stars.png" alt="Stars" />
                    </div>
                </div>
                <div className="flex flex-col justify-end items-end contact-button upper">
                    <h1 className="text-1xl font-bold text-[#6B645C]">AVAILABLE FOR WORK</h1>
                    <h1 className="text-8xl font-bold text-[#393632] tracking-tight">JAN'25</h1>
                </div>
            </div>
        </div>
    )
}