import React from "react";

export default function WhyChooseSection() {
    return (
        <section className="py-20 bg-khahusMist">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-khahusNavy mb-10">Why Organizations Choose KHAHUS</h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-6 w-6 text-khahusRed">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                clipRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold">Strategic Expertise</h4>
                                    <p className="text-khahusSlate">
                                        Deep experience in organizational transformation and business advisory that drives sustainable growth and performance improvement.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-6 w-6 text-khahusRed">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                clipRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold">Practical Solutions</h4>
                                    <p className="text-khahusSlate">
                                        Customized consulting that delivers measurable results and sustainable improvements tailored to your organizational needs.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-6 w-6 text-khahusRed">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                clipRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold">Proven Track Record</h4>
                                    <p className="text-khahusSlate">
                                        Trusted partner for government agencies, NGOs, development organizations, corporates and SMEs seeking strategic advisory and capacity building.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="Consultants having a discussion"
                            className="rounded-2xl border-8 border-white shadow-xl"
                            src="/images/why_us.jpg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
