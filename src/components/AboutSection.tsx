"use client";

import React, { useState, useEffect } from "react";

const images = [
    "/images/about_1.jpg",
    "/images/about_2.avif"
];

export default function AboutSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setActiveIndex((current) => (current === 0 ? 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        return <section className="py-20 bg-khahusMist" id="about" />;
    }

    return (
        <section className="py-20 bg-khahusMist" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 group/text transition-all duration-500 hover:scale-[1.01]">
                        <h2 className="text-3xl font-bold text-khahusNavy mb-6 border-l-4 border-khahusRed pl-4 transition-colors duration-300">
                            KHAHUS Consulting Solutions
                        </h2>
                        <div className="space-y-6">
                            <p className="text-khahusSlate text-lg leading-relaxed transition-colors duration-300 group-hover/text:text-khahusCharcoal">
                                KHAHUS Consulting Solutions is a professional consulting firm focused on helping organizations strengthen planning, decision-making, operational effectiveness and institutional capacity.
                            </p>
                            <p className="text-khahusSlate text-lg leading-relaxed transition-colors duration-300 group-hover/text:text-khahusCharcoal">
                                We provide practical consulting and training solutions tailored to the specific needs of organizations, with an emphasis on structured processes, professional knowledge and measurable improvement.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3 bg-white rounded-lg shadow-sm border-t-2 border-khahusGold transform transition-all duration-700 hover:-translate-y-2 hover:shadow-xl animate-slide-up cursor-default">
                                <span className="block text-xl font-bold text-khahusRed">Planning</span>
                                <span className="text-xs text-khahusSlate uppercase tracking-wide">Strategic support</span>
                            </div>
                            <div className="p-3 bg-white rounded-lg shadow-sm border-t-2 border-khahusGold transform transition-all duration-700 hover:-translate-y-2 hover:shadow-xl animate-slide-up delay-150 cursor-default">
                                <span className="block text-xl font-bold text-khahusRed">Training</span>
                                <span className="text-xs text-khahusSlate uppercase tracking-wide">Capability building</span>
                            </div>
                            <div className="p-3 bg-white rounded-lg shadow-sm border-t-2 border-khahusGold transform transition-all duration-700 hover:-translate-y-2 hover:shadow-xl animate-slide-up delay-300 cursor-default">
                                <span className="block text-xl font-bold text-khahusRed">Delivery</span>
                                <span className="text-xs text-khahusSlate uppercase tracking-wide">Practical guidance</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl group/slider">
                        {images.map((img, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                                        isActive
                                            ? "translate-x-0 z-10"
                                            : idx < activeIndex
                                                ? "-translate-x-full z-0"
                                                : "translate-x-full z-0"
                                    }`}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="Consulting and planning discussion"
                                        className={`w-full h-full object-cover transform transition-transform duration-[6s] ease-linear ${
                                            isActive ? "scale-90" : "scale-105"
                                        }`}
                                        src={img}
                                    />
                                </div>
                            );
                        })}

                        <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                            {images.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? "w-8 bg-khahusRed" : "w-2 bg-white/50"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
