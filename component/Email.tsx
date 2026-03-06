"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Mail: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [resultMessage, setResultMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setResultMessage("Please wait...");

        const payload = {
            access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
            ...formData,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (response.status === 200) {
                setResultMessage("Message sent successfully!");
            } else {
                setResultMessage("Failed to send message. Please try again.");
            }
        } catch (error) {
            setResultMessage("Something went wrong!");
        } finally {
            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setResultMessage(""), 3000);
        }
    };

    return (
        <div className="bg-gradient-to-b from-[#22211E] to-[#3C3936] rounded-2xl flex flex-col items-center text-[#D1D1C7] relative
            mx-[clamp(1.5rem,_3vw,_2.5rem)]
            p-[clamp(1.25rem,_3vw,_2.5rem)]">

            <h1 className="font-bold mb-[clamp(1rem,_2vw,_1.25rem)]
                text-[clamp(1.25rem,_2vw_+_0.5rem,_1.875rem)]">
                Say Hello.
            </h1>

            <form className="w-full space-y-[clamp(1rem,_2vw,_1.5rem)]" onSubmit={handleSubmit}>

                {/* Name */}
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="rounded-2xl border border-[#464643] bg-[#32302D] text-[#D1D1C7] w-full
                        p-[clamp(0.65rem,_1.2vw,_0.75rem)]
                        text-[clamp(0.85rem,_1vw,_1rem)]"
                />

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="rounded-2xl border border-[#464643] bg-[#32302D] text-[#D1D1C7] w-full
                        p-[clamp(0.65rem,_1.2vw,_0.75rem)]
                        text-[clamp(0.85rem,_1vw,_1rem)]"
                />

                {/* Message */}
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your Message"
                    className="rounded-2xl border border-[#464643] bg-[#32302D] text-[#D1D1C7] resize-none w-full
                        p-[clamp(0.65rem,_1.2vw,_0.75rem)]
                        text-[clamp(0.85rem,_1vw,_1rem)]"
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white w-full text-black rounded-2xl font-semibold
                        p-[clamp(0.65rem,_1.2vw,_0.75rem)]
                        text-[clamp(0.9rem,_1vw,_1rem)]"
                >
                    {isLoading ? "Sending..." : "Send Message"}
                </button>

                {resultMessage && (
                    <div className="text-center text-gray-300 mt-[clamp(0.5rem,_1vw,_1rem)]
                        text-[clamp(0.85rem,_0.9vw,_1rem)]">
                        {resultMessage}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Mail;