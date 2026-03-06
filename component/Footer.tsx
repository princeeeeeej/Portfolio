"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import LiveClock from "./LiveClock"
import { useRef } from "react"

export default function Footer() {
    const menu = ["Home", "Services", "Works", "About", "Contact"]
    const socials = ["Github", "Instagram", "Linkedin"]
    const containerRef = useRef(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add("(min-width: 640px)", () => {
            const menuItems = document.querySelectorAll(".menu-items")
            menuItems.forEach((item) => {
                const wrapper = item.querySelector(".m-item")
                const tl = gsap.timeline({ paused: true })
                tl.to(wrapper, { y: "-100%", duration: 0.3, ease: "power2.out" })
                
                const play = () => tl.play()
                const reverse = () => tl.reverse()
                
                item.addEventListener("mouseenter", play)
                item.addEventListener("mouseleave", reverse)

                return () => {
                    item.removeEventListener("mouseenter", play)
                    item.removeEventListener("mouseleave", reverse)
                    tl.kill()
                }
            })

            const socialItems = document.querySelectorAll(".social-items")
            socialItems.forEach((item) => {
                const wrapper = item.querySelector(".s-item")
                const tl = gsap.timeline({ paused: true })
                tl.to(wrapper, { y: "-100%", duration: 0.3, ease: "power2.out" })
                
                const play = () => tl.play()
                const reverse = () => tl.reverse()
                
                item.addEventListener("mouseenter", play)
                item.addEventListener("mouseleave", reverse)

                return () => {
                    item.removeEventListener("mouseenter", play)
                    item.removeEventListener("mouseleave", reverse)
                    tl.kill()
                }
            })
        })

        const arrowDiv = document.querySelector(".arrow-div")
        if (arrowDiv) {
            const tl = gsap.timeline({ paused: true })

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
                }, 0)

            const play = () => tl.play()
            const reverse = () => tl.reverse()

            arrowDiv.addEventListener("mouseenter", play)
            arrowDiv.addEventListener("mouseleave", reverse)

            arrowDiv.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            })
        }

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="grid grid-cols-2 relative
            p-[clamp(1.5rem,_3vw,_2.5rem)]">
            
            <div>
                <h1 className="font-semibold mb-[clamp(0.35rem,_0.6vw,_0.5rem)]
                    text-[clamp(1.15rem,_1.8vw,_1.5rem)]">
                    Menu
                </h1>
                <div className="bg-black w-[95%] h-[1px] opacity-10 rounded-full" />
                <div className="flex text-[#6B6465]
                    mt-[clamp(0.65rem,_1.5vw,_1.25rem)]">
                    <div className="flex flex-col gap-[clamp(0.15rem,_0.3vw,_0.25rem)]">
                        {menu.map((item, index) => (
                            <div key={index} className="relative overflow-hidden cursor-pointer menu-items w-fit
                                h-[clamp(1.15rem,_1.8vw,_2rem)]">
                                <div className="flex flex-col m-item
                                    text-[clamp(0.85rem,_1.1vw,_1.3rem)]">
                                    <h1>{item}</h1>
                                    <h1 className="absolute top-full hidden sm:block">{item}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <h1 className="font-semibold mb-[clamp(0.35rem,_0.6vw,_0.5rem)]
                    text-[clamp(1.15rem,_1.8vw,_1.5rem)]">
                    Socials
                </h1>
                <div className="bg-black w-[95%] h-[1px] opacity-10 rounded-full" />
                <div className="flex text-[#6B6465]
                    mt-[clamp(0.65rem,_1.5vw,_1.25rem)]">
                    <div className="flex flex-col gap-[clamp(0.15rem,_0.3vw,_0.25rem)]">
                        {socials.map((item, index) => (
                            <div key={index} className="relative overflow-hidden cursor-pointer social-items w-fit
                                h-[clamp(1.15rem,_1.8vw,_2rem)]">
                                <div className="flex flex-col s-item
                                    text-[clamp(0.9rem,_1.1vw,_1.3rem)]">
                                    <h1>{item}</h1>
                                    <h1 className="absolute top-full hidden sm:block">{item}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end sm:justify-between items-center
                    mt-[clamp(3.5rem,_8vw,_12.5rem)]
                    ">
                    <div className="text-[clamp(0.75rem,_0.9vw,_1rem)]">
                        <h1 className="font-semibold">LOCAL TIME</h1>
                        <LiveClock />
                    </div>
                    <div className="hidden sm:block">
                        <div className="cursor-pointer bg-[#BFBFB1] rounded-full overflow-hidden arrow-div relative
                            p-[clamp(0.9rem,_1.5vw,_1.25rem)]">
                            <img 
                                src="up.png" 
                                alt="arrow-up" 
                                className="arrow-1
                                    h-[clamp(1.5rem,_2vw,_1.875rem)]
                                    w-[clamp(1.5rem,_2vw,_1.875rem)]" 
                            />
                            <img 
                                src="up.png" 
                                alt="arrow-up" 
                                className="arrow-2 absolute top-30
                                    h-[clamp(1.5rem,_2vw,_1.875rem)]
                                    w-[clamp(1.5rem,_2vw,_1.875rem)]" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}