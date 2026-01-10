"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
    const container = useRef(null);
    const numContainer = useRef(null);
    const mainSection = useRef(null);

    const tl = gsap.timeline({ paused: true })

    useGSAP(() => {
        // Pin the number container
        ScrollTrigger.create({
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            pin: numContainer.current,
            // markers: true
        });

        // Current timeline logic requested by user
        tl.to(".num1", { y: "-100%", duration: 0.3 })
            .to(".num2", { y: "0%", duration: 0.3 }, "<") // Start .num2 move at same time as .num1
            .to(".num2", { y: "-100%", duration: 0.3 }) // Then move .num2 up
            .to(".num3", { y: "0%", duration: 0.3 }, "<") // Bring .num3 in
            .to(".num3", { y: "-100%", duration: 0.3 }) // Then move .num3 up
            .to(".num4", { y: "0%", duration: 0.3 }, "<"); // Bring .num4 in

        // Bind timeline to scroll
        ScrollTrigger.create({
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // Smooth scrubbing
            animation: tl,
            // markers: true
        });

    }, { scope: container });

    return (
        <div className="bg-[#080807] text-[#D1D1C7] p-10 relative z-2 pb-40">
            <div className="flex flex-col overflow-hidden main-section" ref={mainSection}>
                <div className="">
                    <h1 className="text-8xl font-bold" >
                        {"SELECTED WORKS/".split("").map((char, i) => (
                            <span key={i} className="char inline-block">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-20">
                <div className="flex justify-end pr-8">
                    <h1 className="text-[#7E766C] text-1xl">(PROJECTS)</h1>
                </div>
                <div className="w-[61%]">
                    <h3 className="text-2xl text-[#A29E9A] pl-8">Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional ,memorable ,and refined.</h3>
                </div>
            </div>

            <div className="grid grid-cols-2 mt-20" ref={container}>
                {/* Left Column - Sticky Numbers */}
                <div className="h-screen flex items-start pt-10" ref={numContainer}>
                    <div className="relative h-[17rem] flex text-[16rem] overflow-hidden">
                        <span className="leading-none">0</span>
                        <div className="relative w-[11rem] h-[16rem]">
                            <span className="num1 leading-none absolute top-0 left-0">1</span>
                            <span className="num2 leading-none absolute top-0 left-0 translate-y-full">2</span>
                            <span className="num3 leading-none absolute top-0 left-0 translate-y-full">3</span>
                            <span className="num4 leading-none absolute top-0 left-0 translate-y-full">4</span>
                        </div>
                    </div>
                </div>

                {/* Right Column - Scrolling Projects */}
                <div className="flex flex-col gap-40 ">
                    <div className="ml-[-6rem] relative z-10">
                        <img className="h-[50rem] w-[100%] rounded-2xl object-cover" src="video1.png" alt="Video 1" />
                        <div className="flex justify-between mt-3">
                            <div>
                                <h1 className="text-[#A29E9A]">Modern Marketing Website</h1>
                                <h1 className="text-4xl text-[#D1D1C7] font-bold mt-1">NURA</h1>
                            </div>
                            <div className="flex justify-end items-center gap-2">
                                <button className="rounded-full px-2 py-1 border border-[#D1D1C7] text-[0.8rem]">DEVELOPMENT</button>
                                <button className="rounded-full px-2 py-1 text-[#0B0B0A] bg-[#A29E9A] text-[0.8rem]">2025</button>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[-6rem] relative z-20">
                        <img className="h-[50rem] w-[100%] rounded-2xl object-cover" src="video2.png" alt="Video 2" />
                        <div className="flex justify-between mt-3">
                            <div>
                                <h1 className="text-[#A29E9A]">Modern Marketing Website</h1>
                                <h1 className="text-4xl text-[#D1D1C7] font-bold mt-1">NURA</h1>
                            </div>
                            <div className="flex justify-end items-center gap-2">
                                <button className="rounded-full px-2 py-1 border border-[#D1D1C7] text-[0.8rem]">DEVELOPMENT</button>
                                <button className="rounded-full px-2 py-1 text-[#0B0B0A] bg-[#A29E9A] text-[0.8rem]">2025</button>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[-6rem] relative z-30">
                        <img className="h-[50rem] w-[100%] rounded-2xl object-cover" src="video3.png" alt="Video 3" />
                        <div className="flex justify-between mt-3">
                            <div>
                                <h1 className="text-[#A29E9A]">Modern Marketing Website</h1>
                                <h1 className="text-4xl text-[#D1D1C7] font-bold mt-1">NURA</h1>
                            </div>
                            <div className="flex justify-end items-center gap-2">
                                <button className="rounded-full px-2 py-1 border border-[#D1D1C7] text-[0.8rem]">DEVELOPMENT</button>
                                <button className="rounded-full px-2 py-1 text-[#0B0B0A] bg-[#A29E9A] text-[0.8rem]">2025</button>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[-6rem] relative z-40">
                        <img className="h-[50rem] w-[100%] rounded-2xl object-cover" src="video4.png" alt="Video 4" />
                        <div className="flex justify-between mt-3">
                            <div>
                                <h1 className="text-[#A29E9A]">Modern Marketing Website</h1>
                                <h1 className="text-4xl text-[#D1D1C7] font-bold mt-1">NURA</h1>
                            </div>
                            <div className="flex justify-end items-center gap-2">
                                <button className="rounded-full px-2 py-1 border border-[#D1D1C7] text-[0.8rem]">DEVELOPMENT</button>
                                <button className="rounded-full px-2 py-1 text-[#0B0B0A] bg-[#A29E9A] text-[0.8rem]">2025</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}