import React from "react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-khahusMist py-16 lg:py-24" id="hero">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    <div className="lg:col-span-6 text-left" data-purpose="hero-content">
                        <h1 className="text-4xl font-extrabold tracking-tight text-khahusCharcoal sm:text-5xl md:text-6xl lg:leading-tight">
                            Strategic Consulting. <span className="text-khahusGold">Practical Solutions.</span> Sustainable Growth.
                        </h1>
                        <p className="mt-6 text-lg text-khahusSlate max-w-xl">
                            KHAHUS Consulting Solutions provides professional consultancy, training and business solutions designed to strengthen organizational performance, planning and decision-making.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link
                                className="w-full sm:w-auto px-8 py-4 bg-khahusRed text-white font-bold rounded shadow-lg hover:bg-khahusRedDark text-center transition"
                                href="#services"
                            >
                                Explore Our Services
                            </Link>
                            <Link
                                className="w-full sm:w-auto px-8 py-4 border-2 border-khahusNavy text-khahusNavy font-bold rounded hover:bg-khahusNavy hover:text-white text-center transition"
                                href="#contact"
                            >
                                Request a Consultation
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-6" data-purpose="hero-image">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt="Business consulting and planning session"
                                className="w-full h-auto object-cover"
                                src="/images/hero_team.jpg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-khahusGold/15 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
