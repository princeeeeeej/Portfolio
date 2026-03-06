"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Mail from "./Email";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Hello() {
    const helloRef = useRef(null);

    useGSAP(() => {
        gsap.set(helloRef.current, { 
            willChange: "transform",
            force3D: true 
        });

        gsap.to(helloRef.current, {
            y: 350,
            ease: "none",
            force3D: true,
            scrollTrigger: {
                trigger: helloRef.current,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                invalidateOnRefresh: true,
            }
        });

        return () => {
            gsap.set(helloRef.current, { 
                willChange: "auto", 
                clearProps: "all" 
            });
        };
    }, { scope: helloRef });

    return (
        <div 
            ref={helloRef}
            className="bg-gradient-to-b from-[#090908] to-[#373430] rounded-2xl flex flex-col text-[#D1D1C7] items-center relative z-0 transform-gpu backface-hidden
            mx-[clamp(1.5rem,_3vw,_2.5rem)]
            mb-[25rem]
            mt-[-15rem]
            py-15">
            
            <div className="sm:w-[50%] flex flex-col items-center mb-5">
                <h1 className="font-bold text-[clamp(2rem,_6vw_+_0.5rem,_6rem)] text-center">
                    LET&apos;S MAKE
                </h1>
                <h1 className="font-bold text-[clamp(2rem,_6vw_+_0.5rem,_6rem)] text-center">
                    IT HAPPEN
                </h1>
            </div>
            
            <div className="w-full sm:w-[40%]">
                <Mail />
            </div>
        </div>
    )
}