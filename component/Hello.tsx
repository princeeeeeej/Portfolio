"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Mail from "./Email";
gsap.registerPlugin(ScrollTrigger);


export default function Hello() {

    useGSAP(() => {
        // Start with Hello in its natural position (which is pulled up by margin)
        // Animate y positive (down) to create parallax drag
        gsap.to(".hello", {
            y: 350, // Move down by 250px as we scroll
            ease: "none",
            scrollTrigger: {
                trigger: ".hello",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
            }
        });
    });

    return (
        // mt-[-40rem] pulls it up behind the Skills section (curtain)
        // z-0 keeps it behind
        <div className="mx-10 mb-[25rem] bg-gradient-to-b from-[#090908] to-[#373430] rounded-2xl flex flex-col text-[#D1D1C7] py-15 items-center mt-[-15rem] relative z-0 hello">
            <div className="w-[50%] flex flex-col items-center mb-5">
                <h1 className="text-8xl font-bold ">LET'S MAKE</h1>
                <h1 className="text-8xl font-bold ">IT HAPPEN</h1>
            </div>
            <div className="w-[40%]">
                <Mail />
            </div>
        </div>
    )
}