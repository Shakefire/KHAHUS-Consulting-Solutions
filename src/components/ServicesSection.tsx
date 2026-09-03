import React from "react";

export default function ServicesSection() {
    return (
        <section className="py-24 bg-khahusNavy text-white relative" id="services">
            {/* Background Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://placehold.co/1920x1080?text=Data+Center+Abstract')] bg-cover bg-fixed"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-4">Our Services</h2>
                    <div className="w-24 h-1 mx-auto mb-4 animate-premium-line rounded-full"></div>
                    <p className="text-white/75 max-w-2xl mx-auto">
                        Comprehensive end-to-end technology solutions designed to elevate your business operations and efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service Card 1: Management Consulting */}
                    <div className="bg-khahusCharcoal/35 p-8 rounded-xl border border-white/15 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-khahusGold/20 text-khahusGold flex items-center justify-center rounded-lg mb-6 group-hover:bg-khahusRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Management Consulting</h3>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">
                            Strategic and practical consulting services that help organizations improve performance, processes, planning and decision-making.
                        </p>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Strategic planning</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Organizational improvement</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Process optimization</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Management advisory</li>
                        </ul>

                    </div>

                    {/* Service Card 2: Professional Training */}
                    <div className="bg-khahusCharcoal/35 p-8 rounded-xl border border-white/15 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-khahusGold/20 text-khahusGold flex items-center justify-center rounded-lg mb-6 group-hover:bg-khahusRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Professional Training</h3>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">
                            Practical learning programmes that strengthen staff capabilities and organizational effectiveness.
                        </p>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Staff development</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Management training</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Customized workshops</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Capacity-building programmes</li>
                        </ul>
                    </div>

                    {/* Service Card 3: Budgeting & Forecasting */}
                    <div className="bg-khahusCharcoal/35 p-8 rounded-xl border border-white/15 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-khahusGold/20 text-khahusGold flex items-center justify-center rounded-lg mb-6 group-hover:bg-khahusRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Budgeting & Forecasting</h3>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">
                            Structured financial planning support that helps organizations allocate resources and prepare for sustainable growth.
                        </p>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Budget preparation</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Financial forecasting</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Resource allocation</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Performance monitoring</li>
                        </ul>
                    </div>

                    {/* Service Card 4: Business Advisory */}
                    <div className="bg-khahusCharcoal/35 p-8 rounded-xl border border-white/15 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-khahusGold/20 text-khahusGold flex items-center justify-center rounded-lg mb-6 group-hover:bg-khahusRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Business Advisory</h3>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">
                            Informed guidance that helps leaders make sound decisions, manage change and improve business performance.
                        </p>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Business performance review</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Decision-making support</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Change management</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Growth advisory</li>
                        </ul>
                    </div>

                    {/* Service Card 5: Organizational Development */}
                    <div className="bg-khahusCharcoal/35 p-8 rounded-xl border border-white/15 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-khahusGold/20 text-khahusGold flex items-center justify-center rounded-lg mb-6 group-hover:bg-khahusRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Organizational Development</h3>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">
                            Practical support for improving structures, processes, culture and institutional effectiveness.
                        </p>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Organizational assessments</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Process improvement</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Institutional strengthening</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-khahusRed rounded-full mr-2"></span> Monitoring and evaluation</li>
                        </ul>
                    </div>

                    {/* Service Card 6: General Contracting */}
                    <div className="bg-khahusCharcoal/35 p-8 rounded-xl border border-white/15 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-khahusGold/20 text-khahusGold flex items-center justify-center rounded-lg mb-6 group-hover:bg-khahusRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">General Contracting Services</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-khahusRed text-xs font-bold uppercase mb-1">Supply & Procurement</h4>
                                <ul className="space-y-1 text-gray-400 text-[13px]">
                                    <li>Supply and Distribution services</li>
                                    <li>Procurement and Logistics</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-khahusRed text-xs font-bold uppercase mb-1">ICT Infrastructure</h4>
                                <ul className="space-y-1 text-gray-400 text-[13px]">
                                    <li>Network & Data center installs</li>
                                    <li>Facility Support & Maintenance</li>
                                    <li>Technical infrastructure upgrades</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
