"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface NavbarProps {
    onServices: () => void;
    onWorks: () => void;
    onAbout: () => void;
    onContact: () => void;
}

export default function Navbar({
    onServices,
    onWorks,
    onAbout,
    onContact,
}: NavbarProps) {
    useGSAP(() => {
        const navBtns = gsap.utils.toArray<HTMLElement>(".nav-btn");

        navBtns.forEach((btn) => {
            const wrapper = btn.querySelector(".nav-text-wrapper");

            const tl = gsap.timeline({ paused: true });
            tl.to(wrapper, { y: "-100%", duration: 0.4, ease: "power2.out" });

            btn.addEventListener("mouseenter", () => tl.play());
            btn.addEventListener("mouseleave", () => tl.reverse());
        });
    });

    return (
        <div className="flex justify-between mx-10 mt-10 items-center relative z-30">
            <div className="text-2xl">
                <h1 className="text-[#6B645C]">Web Developer</h1>
            </div>

            <div className="flex gap-4 text-2xl text-[#6B645C]">
                <NavItem label="Services" onClick={onServices} />
                <NavItem label="Works" onClick={onWorks} />
                <NavItem label="About" onClick={onAbout} />
                <NavItem label="Contact" onClick={onContact} />
            </div>
        </div>
    );
}


function NavItem({
    label,
    onClick,
}: {
    label: string;
    onClick: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className="nav-btn relative h-8 overflow-hidden cursor-pointer"
        >
            <div className="nav-text-wrapper flex flex-col items-center">
                <span>{label}</span>
                <span className="absolute top-full">{label}</span>
            </div>
        </div>
    );
}
