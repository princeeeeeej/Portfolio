"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import LiveClock from "./LiveClock"
import { useRef } from "react"

export default function Footer() {
    const menu = ["Home", "Services", "Works", "About", "Contact"]
    const socials = ["Github", "Instagram", "Linkedin"]
    const arrowRef = useRef(null)

    useGSAP(() => {
        const menuItems = document.querySelectorAll(".menu-items")
        menuItems.forEach((item) => {
            const wrapper = item.querySelector(".m-item");
            const tl = gsap.timeline({ paused: true });
            tl.to(wrapper, { y: "-100%", duration: 0.3, ease: "power2.out" })
            item.addEventListener("mouseenter", () => tl.play());
            item.addEventListener("mouseleave", () => tl.reverse());
        })
        const socialItems = document.querySelectorAll(".social-items")
        socialItems.forEach((item) => {
            const wrapper = item.querySelector(".s-item");
            const tl = gsap.timeline({ paused: true });
            tl.to(wrapper, { y: "-100%", duration: 0.3, ease: "power2.out" })
            item.addEventListener("mouseenter", () => tl.play());
            item.addEventListener("mouseleave", () => tl.reverse());
        })

        const arrowDiv = document.querySelector(".arrow-div");

        const tl = gsap.timeline({ paused: true });

        tl.to(arrowDiv, {
            scale: 0.85,                
            duration: 0.25,
            ease: "power3.out",
        }, 0)                          
            .to(".arrow-1", {
                y: "-200%",
                duration: 0.3,
                ease: "power4.out",
            }, 0)
            .to(".arrow-2", {
                top: "20",                    
                duration: 0.3,
                ease: "power4.out",
            }, 0);

        arrowDiv?.addEventListener("mouseenter", () => tl.play());
        arrowDiv?.addEventListener("mouseleave", () => tl.reverse());

        arrowDiv?.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        })

    })

    return (
        <div className=" grid grid-cols-2 p-10 relative">
            <div>
                <h1 className="text-2xl font-semibold mb-2">Menu</h1>
                <div className="bg-black w-[95%] h-[1px] opacity-10 rounded-full" />
                <div className="flex mt-5 text-[1.3rem] text-[#6B6465]">
                    <div className="flex flex-col gap-1">
                        {menu.map((item, index) => (
                            <div key={index} className="relative overflow-hidden h-[2rem] cursor-pointer menu-items w-fit">
                                <div className="flex flex-col m-item">
                                    <h1>{item}</h1>
                                    <h1 className="absolute top-full">{item}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-semibold mb-2">Socials</h1>
                <div className="bg-black w-[95%] h-[1px] opacity-10 rounded-full" />
                <div className="flex mt-5 text-[1.3rem] text-[#6B6465]">
                    <div className="flex flex-col gap-1">
                        {socials.map((item, index) => (
                            <div key={index} className="relative overflow-hidden h-[2rem] cursor-pointer social-items w-fit">
                                <div className="flex flex-col s-item">
                                    <h1>{item}</h1>
                                    <h1 className="absolute top-full">{item}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-50 flex justify-between items-center">
                    <div>
                        <h1 className="font-semibold">LOCAL TIME</h1>
                        <LiveClock />
                    </div>
                    <div>
                        <div className="cursor-pointer bg-[#BFBFB1] rounded-full p-5 overflow-hidden arrow-div relative">
                            <img src="up.png" alt="arrow-up" height={30} width={30} className="arrow-1" />
                            <img src="up.png" alt="arrow-up" height={30} width={30} className="arrow-2 absolute top-30" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}