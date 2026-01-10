"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

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

    /* ---------------- FORM HANDLERS ---------------- */

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
            access_key: process.env.ACCESS_KEY,
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
        <div className="mx-10 bg-gradient-to-b from-[#22211E] to-[#3C3936] rounded-2xl flex flex-col items-center text-[#D1D1C7] relative">

            {/* Form Card (inner panel like Hello) */}
            <div className="bg-gradient-to-b from-[#22211E] to-[#3C3936] rounded-2xl p-10 flex flex-col items-center w-full">
                <h1
                className="mb-5 text-3xl font-bold"
            >
                Say Hello.
            </h1>
                <form className="space-y-6 w-full" onSubmit={handleSubmit}>

                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="rounded-2xl p-3 mb-10 border border-[#464643] bg-[#32302D] text-[#D1D1C7] w-full border-"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email"
                        className="rounded-2xl p-3 mb-10 border border-[#464643] bg-[#32302D] text-[#D1D1C7] w-full"
                    />

                    {/* Message */}
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Your Message"
                        className="rounded-2xl p-3 mb-10 border border-[#464643] bg-[#32302D] text-[#D1D1C7] resize-none w-full"
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-white w-full text-black p-3 rounded-2xl font-semibold"
                    >
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>

                    {resultMessage && (
                        <div className="text-center text-gray-300 mt-4">
                            {resultMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>

    );
};

export default Mail;
