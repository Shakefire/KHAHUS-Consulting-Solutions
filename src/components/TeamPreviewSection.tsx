import React from 'react';

const team = [
    {
        name: "Mustapha Hussain O.",
        role: "FCA - Managing Director/CEO",
        desc: "Provides strategic leadership and governance direction, guiding the firm’s consulting and business development vision."
    },
    {
        name: "Mustafa Kayode",
        role: "Project Director",
        desc: "Oversees execution quality, project delivery, and cross-functional coordination to ensure client objectives are met effectively."
    }
];

export default function TeamPreviewSection() {
    return (
        <section className="py-20 bg-khahusMist">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-khahusNavy mb-4">Meet Our Leadership</h2>
                    <div className="w-24 h-1 mx-auto mb-4 animate-premium-line rounded-full"></div>
                    <p className="text-khahusSlate max-w-3xl mx-auto text-lg">
                        Our team of experts is dedicated to delivering excellence and innovation in every project we undertake.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {team.map((member, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm border border-khahusNavy/10 overflow-hidden text-center p-6 hover:shadow-md transition group">
                            <div className="w-24 h-24 mx-auto rounded-full bg-khahusMist flex items-center justify-center mb-6 border border-khahusNavy/10 group-hover:border-khahusGold transition-colors">
                                <svg className="w-12 h-12 text-khahusNavy/30 group-hover:text-khahusRed/50 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-khahusCharcoal mb-1">{member.name}</h3>
                            <p className="text-khahusRed font-semibold text-xs uppercase tracking-wider mb-4">{member.role}</p>
                            <p className="text-khahusSlate text-sm leading-relaxed">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
